import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';
import Landing from '../Landing/Landing';

const Auth = (props) => {
    return ( <React.Fragment>
        <Switch>
            <Route exact path='/'>
                { props.signedIn ? <Dashboard /> : <Landing /> }
            </Route>
        </Switch>
    </React.Fragment> );
}
 
export default Auth;