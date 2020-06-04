export const validate = val => {

    const errors = {};
    if (!val.country) {
       errors.country = 'Required';
    }
    if (!val.address) {
       errors.address = 'Required';
    }

    if(!val.postal_code)
    {
      errors.postal_code = 'Required'
    } else if(val.postal_code.length > 8)
    {
      errors.postal_code = 'Postal code should not be more than 8 letters'
    }
  
    if (!val.mobile_number) {
      errors.mobile_number = 'Required'
    } else if (isNaN(Number(val.mobile_number))) {
      errors.mobile_number = 'Must be a number'
    } else if(val.mobile_number.toString().length < 10)
    {
      errors.mobile_number = 'Must be 10 digits'
    }
    else if(val.mobile_number.toString().length > 13)
    {
      errors.mobile_number = 'Mobile number must not exceed 13 digits'
    }
    return errors;
  };