import React from 'react';
import { Button } from 'react-bootstrap';

const handleSignOut = () => {
    localStorage.setItem('loggedIn', 'false');
    localStorage.setItem('user', '');
}

const SignOut = () => {
    return ( <form action='/' onSubmit={handleSignOut}>
        <Button type="submit"></Button>
    </form> );
}
 
export default SignOut;