import React, { Component } from 'react';
import { Spinner } from 'react-bootstrap';
import Classes from './Classes';

class ClassesWrapper extends Component {
    state = { classes: null }

    componentDidMount() {
        // find classes
        this.setState({ classes: [] });
    }

    render() { 
        return ( <div>
            { 
                this.state.classes == null ? 
                <Spinner animation="border" role="status"><span className="sr-only">Loading...</span></Spinner> 
                : <Classes classes={this.state.classes} />
            } 
        </div> );
    }
}
 
export default ClassesWrapper;