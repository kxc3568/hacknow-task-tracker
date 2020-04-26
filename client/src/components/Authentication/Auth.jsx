import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';
import Landing from '../Landing/Landing';
import SignIn from './SignIn';
import SignOut from './SignOut';

const Auth = (props) => {
    // let history = useHistory();

    return ( <React.Fragment>
        <Switch>
            <Route exact path='/'>
                { props.signedIn ? <Dashboard /> : <Landing /> }
            </Route>
            <Route path='/signin'>
                { props.signedIn ? <Dashboard /> : <SignIn /> }
            </Route>
            <Route path='/signout'>
                <SignOut />
            </Route>
        </Switch>
    </React.Fragment> );
}
 
export default Auth;