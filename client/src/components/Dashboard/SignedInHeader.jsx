import React from 'react';
import { Navbar, Form, Button, Nav } from 'react-bootstrap';
import styles from '../../styles/dashboard/signedinheader.module.css';

const SignedInHeader = () => {
    return ( <Navbar expand="lg" className={styles.header}>
        <Navbar.Brand href="#home" className={styles.brand}>
            <div>
                <b>Tasker/Logo</b>
                <p>School</p>
            </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
        </Nav>
        <Form inline>
            <Button className={styles.profile}></Button>
        </Form>
        </Navbar.Collapse>
    </Navbar> );
}

export default SignedInHeader;