import React from 'react';
import { Navbar, Form, Button, Nav } from 'react-bootstrap';
import styles from '../../styles/dashboard/nav.module.css'

const Navigation = () => {
    return ( <Navbar expand="lg" className={styles.nav}>
        <Navbar.Brand href="#home"><b>Tasker/Logo</b></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
        </Nav>
        <Form inline>
            <Button variant="link" style={{color: "black"}}>Sign in</Button>
            <Button variant="outline-dark">Sign up</Button>
        </Form>
        </Navbar.Collapse>
    </Navbar> );
}
 
export default Navigation;