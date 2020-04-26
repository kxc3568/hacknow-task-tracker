const functions = require('firebase-functions');
const admin = require('firebase-admin');
const express = require('express');
const firebase = require('firebase')
const crypto = require("crypto");
require('dotenv').config();
const cors = require("cors");

var firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: "hack-now-tasker.firebaseapp.com",
    databaseURL: "https://hack-now-tasker.firebaseio.com",
    projectId: "hack-now-tasker",
    storageBucket: "hack-now-tasker.appspot.com",
    messagingSenderId: "929827749702",
    appId: "1:929827749702:web:8f406a4611c2bcdd3e6f47",
    measurementId: "G-XSBPC4Z8MT"
  };

admin.initializeApp({
    credential: admin.credential.cert('./serviceAccountKey.json')
});

firebase.initializeApp(firebaseConfig);
const db = admin.firestore()
const app = express();
app.use(cors());

// GET request: for all users
app.get('/users', (req, res) => {
    db.collection('users').get()
        .then(data => {
            let users = [];
            data.forEach(doc => {
                users.push({
                    userId: doc.data().userId,
                    name: doc.data().name,
                    email: doc.data().email,
                    bio: doc.data().bio,
                    assignments: doc.data().assignments,
                    roles: doc.data().roles,
                    classes: doc.data().classes
                });
            });
            return res.json(users);
        }).catch(err => console.error(err));
});

// GET assignments: for all assignments
app.get('/assignments', (req, res) => {
    db.collection('assignments').get()
        .then(data => { 
            let assignments = [];
            data.forEach(doc => { 
                assignments.push({ 
                    assignmentId: doc.data().assignmentId,
                    name: doc.data().name,
                    numParts: doc.data().numParts,
                    dueDate: doc.data().dueDate
                });
            });
            return res.json(assignments);
        }).catch(err => console.error(err));
});

// GET request for all classrooms
app.get('/classrooms', (req, res) => {
    db.collection('classrooms').get()
        .then(data => {
            let classrooms = [];
            data.forEach(doc => {
                classrooms.push({
                    classroomId: doc.data().classroomId,
                    name: doc.data().name,
                    users: doc.data().users,
                    assignments: doc.data().assignments,
                    admin: doc.data().admin 
                })
            })
            return res.json(classrooms);
        }).catch(err => console.error(err));
});

// GET request: id is userId. Intented for profile page 
app.get('/users/:id', (req, res) => {
    db.collection('users').doc(req.params.id)
        .get() 
        .then(doc => {
            return res.json(doc.data());
        }).catch(err => console.error(err));
        
});

// GET request, id is assignmentId -- IS THIS ENDPOINT NECESSARY?
app.get('/assignments/:id', (req, res) => {
    db.collection('assignments').doc(req.params.id)
        .get() 
        .then(doc => {
            return res.json(doc.data());
        }).catch(err => console.error(err)); 
});

// GET request, id is the classroomId
app.get('/classrooms/:id', (req, res) => {
    db.collection('classrooms').doc(req.params.id)
        .get()
        .then(doc => {
            return res.json(doc.data());
        }).catch(err => console.error(err));
});

// PUT: NewUser into the current classroom 
app.put('/:classroomId/user', (req, res) => {
    db.collection('classrooms').doc(req.params.classroomId)
        .update({
            users: admin.firestore.FieldValue.arrayUnion(req.body.userId)
        }).then(() => {
            res.json({message: "users updated successfully"});
        })
        .catch(err => console.error(err));     

    db.collection('users').doc(req.body.userId)
        .update({
            classes: admin.firestore.FieldValue.arrayUnion(req.params.classroomId)
        })
        .then(() => {
            return res.json({message: `${req.body.userId} added ${req.params.classroomId} to classrooms successfully`});
        })
        .catch(err => console.error(err));         

})

// // Upon creating of a room, admin can add assignments to the classroom
app.post('/:classroomId/assignment', (req, res) => {
    // Should ONLY CAN BE RUN BY THE ADMIN
    const assignment = {
        assignmentId: crypto.randomBytes(8).toString("hex"),
        name: req.body.name,
        numParts: req.body.numParts,
        dueDate: req.body.dueDate
    }; 
    
    // Assignment Created
    db.collection('assignments')
        .doc(assignment.assignmentId)
        .set(assignment)
        .then(doc => {
            console.log("assignment created successfully");
        })
        .catch(err => {
            res.status(500).json({ error: 'something went wrong'});
            console.error(err)
        });

    // Assignment added under Classroom's "assignment" attribute
    db.collection('classrooms')
        .doc(req.params.classroomId)
        .update({
            assignments: admin.firestore.FieldValue.arrayUnion(assignment.assignmentId)
        })
        .then(() => {
            console.log("assignment binded to classroom successfully");
        }).catch(err => console.error(err));

    db.collection('classrooms')
        .doc(req.params.classroomId)
        .get()
        .then(doc => {
            doc.data().users.forEach(userId => {
                db.collection('users').doc(userId).update({
                    [`assignments.${assignment.assignmentId}`]: new Array(assignment.numParts).fill(0) 
                })
                .catch(err => console.error(err));
            return res.json({message: `assignment ${assignment.assignmentId} propogated`});
            }).catch(err => console.log(err));
        }).catch(err => console.log(err));
});

// Function called by a user trying to create a room
app.post('/:userId/classroom', (req, res) => {
    const classroom = {
        classroomId: crypto.randomBytes(8).toString("hex"),
        name: req.body.name,
        users: [],
        assignments: [],
        admin: req.params.userId //This would be the authenticated user's userId once finished with auth.
    };

    db.collection('classrooms')
        .doc(classroom.classroomId)
        .set(classroom)
        .then(doc => {
            // Upon creating of a classroom, the classroomId is added to the admin's "classrooms" list. 
            db.collection('users')
            .doc(req.params.userId)
            .update({
                classes: admin.firestore.FieldValue.arrayUnion(classroom.classroomId)
            })
            .then(() => {
                return res.json({message: `${classroom.admin} added ${classroom.classroomId} to classrooms successfully`});
            })
            .catch(err => console.error(err));         
        })
        .catch(err => {
            res.status(500).json({ error: 'something went wrong'});
            console.error(err)
        });
});

// Updates the users on classroom to a given id
app.put('/:classroomId/user/:userId', async (req, res) => {
    let newUsers = []
    db.collection('classrooms').doc(req.params.classroomId)
        .get() 
        .then(doc => {
            newUsers = doc.data().users;
        }).catch(err => console.error(err));

    newUsers.push(req.params.userId);

    db.collection('classrooms').doc(req.params.classroomId)
        .update({
            users: newUsers
        }).then(() => {
            return res.json({message: "users updated successfully"});
        })
        .catch(err => console.error(err));     

    db.collection('users').doc(req.params.userId)
        .update({
            classes: admin.firestore.FieldValue.arrayUnion(classroom.classroomId)
        })
        .then(() => {
            return res.json({message: `${classroom.admin} added ${classroom.classroomId} to classrooms successfully`});
        })
        .catch(err => console.error(err));         
});

// PUT: Endpoint to fill bool array to req.body.milestone
app.put('/:userId/:assignmentId/updateMilestone', (req, res) => {
    db.collection('assignments').doc(req.params.assignmentId).get()
        .then(doc => {
            assignment = doc.data();
            let newMilestone = new Array(assignment.numParts).fill(0).fill(1, 0, req.body.milestone);
            db.collection('users').doc(req.params.userId).update({
                [`assignments.${req.params.assignmentId}`]: newMilestone
            }).then(() => {
                return res.json({message: `updated ${req.params.userId}'s milestones of ${req.params.assignmentId} successfully`});
            }).catch(err => console.error(err));  
        }).catch(err => console.error(err));
           
});

// Authentication for new user sign-ups
app.post('/signup', (req, res) => {
    let token, userId
    const newUser = { 
        email: req.body.email,
        password: req.body.password,
        confirmPassword: req.body.confirmPassword,
    };

    // TODO: Validation for new user

    firebase.auth().createUserWithEmailAndPassword(newUser.email, newUser.password)
        .then((data) => {
            userId = data.user.uid;
            return data.user.getIdTokenResult();
        }).then((token) => {
            token = token
            const userCredentials = {
                userId,
                email: newUser.email,
                bio: '',
                assignments: {},
                classes: []
            };
            return db.collection('users').doc(userId).set(userCredentials);
        }).then(() => {
            return res.status(201).json(`User ${userId} has been created`);
        }).catch(err => console.log(err));
});

exports.api = functions.https.onRequest(app);