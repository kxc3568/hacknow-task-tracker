let db = { 
    users: [
        {
            userId: 'userId',
            email: 'user@gmail.com',
            imageUrl: 'image/path',
            assigned: {
                'assignment1ID': '4',
                'assignment2Id': '5'
            },
            bio: 'Hello, I am a user',
            // website: 'www.hack-now/user.com'
        }
    ],

    assignments: [
        {
            assignmentId: 'assignmentID',
            title: 'assignment',
            numParts: '4',
            dueDate: '2020-04-26'
        }
    ],

    classrooms: [
        {
            classroomId: 'classroomId',
            className: 'classroom',
            users: ['user1Id, user2Id, user3Id']
        }
    ]
}