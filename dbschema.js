let db = { 
    users: [
        {
            userId: 'userId',
            email: 'user@gmail.com',
            imageUrl: 'image/path',
            assigned: {
                'assignment1ID': '4',
                'assignment2Id': '5',
                'assignmentId3': '6'
            },
            classes: ['clasroomId1', 'classroomId2'],
            // roles: {
            //     'teacher': false,
            //     'student': true
            // },
            bio: 'Hello, I am a user',
        }
    ],

    assignments: [
        {
            assignmentID: 'assignmentID',
            title: 'assignment',
            description: 'description',
            numParts: '4',
            dueDate: '2020-04-26'
        }
    ],

    classrooms: [
        {
            classroomId: 'classroomId',
            className: 'classroom',
            professorName: 'professor',
            users: ['user1Id', 'user2Id', 'user3Id'],
            assignments: ['assignmentId1', 'assignmentId2', 'assignmentId3'],
            admin: 'adminId'
        }
    ]
}