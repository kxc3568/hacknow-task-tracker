import React, { Component } from 'react'
import { Button } from 'react-bootstrap';

class SignIn extends Component {

    state = {  };

    constructor() {
        super();
        this.signinRef = React.createRef();
    }

    handleSubmit = async (e) => {
        const userListRes = await fetch('http://localhost:5000/hack-now-tasker/us-central1/api/users');
        const userList = await userListRes.json();
        const input = this.signinRef.current;
        const email = input.value;
        console.log(email);
        const possibleUsers = userList.filter(user => user.email === email);
        if (possibleUsers.length == 1) {
            localStorage.setItem('loggedIn', 'true');
            localStorage.setItem('user', email);
        } else {
            console.log('not authenticated');
            e.preventDefault();
        }
    }

    render() {
        return ( <form action='http://localhost:5000/hack-now-tasker/us-central1/api/login' onSubmit={this.handleSubmit}>
            <input type="text" placeholder="email" ref={this.signinRef}/>
            <Button type="submit">submit</Button>
        </form> );
    }
}
 
export default SignIn;