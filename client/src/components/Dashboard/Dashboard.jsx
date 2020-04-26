import React, { Component } from 'react';
import SignedInHeader from './SignedInHeader';
import ClassesWrapper from './ClassesWrapper';

class Dashboard extends Component {
    state = { user: null };

    async componentDidMount() {
        if (this.state.user === null) {
            const userEmail = localStorage.getItem('user');
            const userListRes = await fetch('http://localhost:5000/hack-now-tasker/us-central1/api/users');
            const userList = await userListRes.json();
            const currentUser = userList.find(user => user.email === userEmail);
            this.setState({ user: currentUser });
        }
    }

    render() {
        const { user } = this.state;

        return ( <React.Fragment>
            <SignedInHeader user={user}/>
            <ClassesWrapper user={user}/>
        </React.Fragment> );
    }
}

export default Dashboard;