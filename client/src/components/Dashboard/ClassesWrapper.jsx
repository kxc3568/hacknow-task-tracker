import React, { Component } from 'react';
import { Spinner } from 'react-bootstrap';
import Classes from './Classes';
import Footer from '../General/Footer';

class ClassesWrapper extends Component {
    state = { user: null, classes: null }

    componentDidUpdate(prevProps) {
        const { user } = this.props;
        if (prevProps.user !== this.props.user) {
            this.setState({ user: user, classes: user.classes });
        }
    }

    render() {
        const { user, classes } = this.state;
        return ( <div>
            {
                classes == null ? 
                <Spinner animation="border" role="status"><span className="sr-only">Loading...</span></Spinner> 
                : <Classes classes={classes} user={user}/>
            } 
            <Footer />
        </div> );
    }
}
 
export default ClassesWrapper;