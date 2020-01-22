import React from 'react';
import {
    Route,
    Redirect
} from 'react-router-dom';
import {LOGIN_ROUTE} from "../../constants/routes";

const PrivateRoute = ({component: Component, user, ...rest}) => (
    <Route {...rest} render={(props) => (
        (user && user.uid) ? <Component key={props.location.key} {...props} /> : <Redirect to={{
            pathname: LOGIN_ROUTE,
            state: {from: props.location}
        }}/>
    )}/>
);

export default PrivateRoute;

