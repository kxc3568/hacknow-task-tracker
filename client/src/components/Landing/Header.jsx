import React from 'react';
import { Navbar, Form, Button, Nav } from 'react-bootstrap';
import styles from '../../styles/landing/header.module.css';

const Header = () => {
    return ( <Navbar expand="lg" className={styles.header}>
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
 
export default Header;