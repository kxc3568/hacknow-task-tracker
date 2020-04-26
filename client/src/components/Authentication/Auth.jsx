import React from 'react';
import { Switch, Route } from 'react-router-dom';
// import { useHistory } from "react-router-dom";
import Dashboard from '../Dashboard/Dashboard';
import Landing from '../Landing/Landing';
import SignIn from './SignIn';
import Login from './Login';

const Auth = (props) => {
    // let history = useHistory();

    return ( <React.Fragment>
        <Switch>
            <Route exact path='/'>
                { props.signedIn ? <Dashboard /> : <Landing /> }
            </Route>
            <Route path='/login'>
                { props.signedIn ? <Dashboard /> : <Login /> }
            </Route>
        </Switch>
    </React.Fragment> );
}
 
export default Auth;