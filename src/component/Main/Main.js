import React, {Suspense} from 'react';
import { Switch } from 'react-router-dom';
import { mainRoutes } from '../../routes/mainRoutes';
import PublicRoute from '../routes/PublicRoute';
import PrivateRoute from '../routes/PrivateRoute';
import { getAuth } from '../../redux/selectors/authSelectors';
import { useSelector } from 'react-redux';

const Main = () => {
 
    const isAuth = useSelector(getAuth)
    return (
       <Suspense fallback={<h2>...loader</h2>}>
            <Switch>
                {mainRoutes.map((route) =>
                    !route.isPrivate ? (
                        <PublicRoute {...route} isAuth={isAuth} key={route.path} />
                    ) : <PrivateRoute {...route} isAuth={isAuth} key={route.path}/>
                )}
            </Switch>
        </Suspense> 
 )
}

export default Main;