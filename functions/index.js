const functions = require('firebase-functions');
const admin = require('firebase-admin');
const express = require('express');
const firebase = require('firebase')


var serviceAccount = require('/Users/nathanchou/Downloads/hack-now-tasker-firebase-adminsdk-buf8u-2723baf69b.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
})

var firebaseConfig = {
    apiKey: "AIzaSyDIjXhd4C3DVmxCNbI5GF7PUfdehB9FWz8",
    authDomain: "hack-now-tasker.firebaseapp.com",
    databaseURL: "https://hack-now-tasker.firebaseio.com",
    projectId: "hack-now-tasker",
    storageBucket: "hack-now-tasker.appspot.com",
    messagingSenderId: "929827749702",
    appId: "1:929827749702:web:8f406a4611c2bcdd3e6f47",
    measurementId: "G-XSBPC4Z8MT"
  };

firebase.initializeApp(firebaseConfig);
const db = admin.firestore()
const app = express();  

// User get and post requests
app.get('/users', (req, res) => {
    db.collection('users').get()
        .then(data => {
            let users = [];
            data.forEach(doc => {
                users.push({
                    // userId: FirebaseAuth.getInstance().getCurrentUser().getUid();
                    name: doc.data().name,
                    email: doc.data().email,
                    bio: doc.data().bio
                });
            });
            return res.json(users);
        }).catch(err => console.error(err));
});

app.get('/users/:id', (req, res) => {
    db.collection('users').doc(req.params.id)
        .get() 
        .then(doc => {
            return res.json(doc.data());
        }).catch(err => console.error(err));
        
})

app.get('/assignments', (req, res) => {
    db.collection('assignments').get()
        .then(data => { 
            let assignments = [];
            data.forEach(doc => { 
                assignments.push({ 
                    title: doc.data().title,
                    numParts: doc.data().numParts,
                    dueDate: doc.data().dueDate
                });
            });
            return res.json(assignments);
        }).catch(err => console.error(err));
});

app.get('/assignments/:id', (req, res) => {
    db.collection('assignments').doc(req.params.id)
        .get() 
        .then(doc => {
            return res.json(doc.data());
        }).catch(err => console.error(err));
        
})

app.get('/classrooms', (req, res) => {
    db.collection('classrooms').get()
        .then(data => {
            let classrooms = [];
            data.forEach(doc => {
                classrooms.push({
                    className: doc.data().className,
                    activeUsers: doc.data().activeUsers,
                    admin: doc.data().admin 
                })
            })
            return res.json(classrooms);
        }).catch(err => console.error(err));
})

app.get('/classrooms/:id', (req, res) => {
    db.collection('classrooms').doc(req.params.id)
        .get() 
        .then(doc => {
            return res.json(doc.data());
        }).catch(err => console.error(err));
        
})


app.post('/user', (req, res) => {
    const user = { 
        // userId: doc.id,
        name: req.body.name,
        email: req.body.email,
        bio: ''
    };

    db.collection('users')
        .add(user)
        .then(doc => {
            res.json({ message: `document ${doc.id} created successfully`});
        })
        .catch(err => {
            res.status(500).json({ error: 'something went wrong'});
            console.error(err)
        });
});

app.post('/assignment', (req, res) => {
    const assignment = {
        // assignmentId = doc.id,
        title: req.body.title,
        numParts: req.body.numParts,
        dueDate: req.body.dueDate
    }; 

    db.collection('assignments')
        .add(assignment)
        .then(doc => {
            res.json({ message: `document ${doc.id} created successfully`});
        })
        .catch(err => {
            res.status(500).json({ error: 'something went wrong'});
            console.error(err)
        });
});

app.post('/classroom', (req, res) => {
    const classroom = {
        name: req.body.name,
        activeUsers: [],
        admin: req.body.admin
    };

    db.collection('classrooms')
    .add(classroom)
    .then(doc => {
        res.json({ message: `document ${doc.id} created successfully`});
    })
    .catch(err => {
        res.status(500).json({ error: 'something went wrong'});
        console.error(err)
    });

});


// Updates the users on classroom to a given id
app.put('/classrooms/:classroomId/:userId', (req, res) => {
    let currActiveUsers = []
    db.collection('classrooms').doc(req.params.classroomId)
        .get() 
        .then(doc => {
            currActiveUsers = doc.data().activeUsers
        }).catch(err => console.error(err));

    currActiveUsers.push(req.params.userId);

    db.collection('classrooms').doc(req.params.classroomId)
        .update({
            activeUsers: currActiveUsers
        }).then(() => {
            return res.json({message: "activeUsers upated successfully"});
        })
        .catch(err => console.error(err));
        
});


exports.api = functions.https.onRequest(app);