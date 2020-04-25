import React, { Component } from 'react'
import Auth from './Auth';

class Security extends Component {
    state = {
        signedIn: false
    };

    componentDidMount() {
        // validate user
        // this.setState({ signedIn: true });
    }

    render() { 
        return ( <React.Fragment>
            <Auth signedIn={this.state.signedIn} />
        </React.Fragment> );
    }
}

export default Security;