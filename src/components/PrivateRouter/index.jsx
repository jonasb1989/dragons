import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const PrivateRouter = ({ component: Component, isUserLogged, location, ...rest }) => (
  <Route
    {...rest}
      render={props =>
      isUserLogged ? (
        <Component {...props} />
      ) : (
        <Redirect to="/" />
      )
    }
  />
);
  
  export default PrivateRouter;