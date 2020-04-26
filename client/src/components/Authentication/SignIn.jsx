import React, { Component } from 'react'
import { Button } from 'react-bootstrap';

class SignIn extends Component {

    constructor() {
        super();
        this.signinRef = React.createRef();
        this.submitButtonRef = React.createRef();
    }

    handleSubmit = async (e) => {
        const userListRes = await fetch('http://localhost:5000/hack-now-tasker/us-central1/api/users');
        const userList = await userListRes.json();
        const input = this.signinRef.current;
        const email = input.value;
        const possibleUsers = userList.filter(user => user.email === email);
        
        if (possibleUsers.length === 1) {
            localStorage.setItem('loggedIn', 'true');
            localStorage.setItem('user', email);
        }
        const button = this.submitButtonRef.current;
        button.click();
    }

    render() {
        return ( <form action='/' >
            <input type="text" placeholder="email" ref={this.signinRef}/>
            <Button onClick={this.handleSubmit}>submit</Button>
            <Button ref={this.submitButtonRef} type="submit" style={{display: "none"}}>submit</Button>
        </form> );
    }
}
 
export default SignIn;