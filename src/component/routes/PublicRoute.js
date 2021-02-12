import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const PublicRoute = ({
    path, name, exact, component: MyComponent, isAuth, restricted
}) => {
    return isAuth && restricted ? (
        <Redirect to="" />
    ) : (
        <Route path={path}
            exact={exact}
            render={() => <MyComponent name={name} />} />
    
    );
}

export default PublicRoute;