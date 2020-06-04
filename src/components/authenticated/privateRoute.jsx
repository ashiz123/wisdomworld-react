import {Redirect, Route} from 'react-router-dom';
import React from 'react';



 const PrivateRoute = ({ component: Component, ...rest }) => (
   
  <Route {...rest} render={(props) => (
        localStorage.getItem('token') !== null
          ? <Component  {...props} />
          : <Redirect to='/' />
      )} />  
  
   
 )


  export default PrivateRoute;


  // const PrivateRoute = ({ component: Component, ...rest }) => (
  //   <Route {...rest} render={(props) => (
  //     fakeAuth.isAuthenticated === true
  //       ? <Component {...props} />
  //       : <Redirect to='/login' />
  //   )} />
  // )