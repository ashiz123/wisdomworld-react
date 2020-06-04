
import React from 'react';
import {Input} from 'reactstrap';

export const renderField = ({ input, label, type, meta: { touched, error, warning } }) => 
  {
   
    return(
        <div>
        <Input {...input} placeholder={label} type={type}/>
        {touched && ((error && <span className="text-danger text-error">{error}</span>) || (warning && <span>{warning}</span>))}
      </div>
      )
  
  }