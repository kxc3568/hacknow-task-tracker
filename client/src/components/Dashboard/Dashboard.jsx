import React, { Component } from 'react';
import SignedInHeader from './SignedInHeader';
import ClassesWrapper from './ClassesWrapper';

class Dashboard extends Component {
    state = {  }
    render() {
        return ( <React.Fragment>
            <SignedInHeader />
            <ClassesWrapper />
        </React.Fragment> );
    }
}

export default Dashboard;