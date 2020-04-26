import React, { Component } from 'react'
import Auth from './Auth';

class Security extends Component {
    state = {
        signedIn: false,
        userEmail: null
    };

    componentDidMount() {
        if (localStorage.getItem('loggedIn') === 'true') {
            this.setState({ signedIn: true, userEmail: localStorage.getItem('user') });
        }
    }

    render() { 
        return ( <React.Fragment>
            <Auth signedIn={this.state.signedIn} />
        </React.Fragment> );
    }
}

export default Security;