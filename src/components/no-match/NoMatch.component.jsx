 import React from 'react';
 import {useLocation } from 'react-router-dom';



export const NoMatch = () => {
    let location = useLocation();
    console.log(location);
  
    return (
      <div className="error-image" >
        <h3>
          Page not found: <code>{location.pathname}</code>
        </h3>
       
      </div>
    );
  }


  