export const formValid = ({formErrors, ...rest}) =>
{
  let valid = true;

  // validate form errors empty
  Object.values(formErrors).forEach(
    val =>{val.length > 0 && 
      (valid = false);
    });


    // validate form
    Object.values(rest).forEach(
      val => {val===null && (valid=false)
    });

    return valid;
  }