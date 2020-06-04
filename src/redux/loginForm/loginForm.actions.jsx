import {LoginFormActionTypes} from './loginForm.actionTypes';





export const loginForm = (LoginFormOpen) => dispatch => 
{
    
    if (LoginFormOpen === true)
    {
        dispatch(closeLoginForm())
    }else{
        dispatch(openLoginForm())
    }
}




 function openLoginForm()
{
    return{
        type: LoginFormActionTypes.OPEN_LOGIN_FORM
    }
}


 function closeLoginForm()
{
    return{
        type: LoginFormActionTypes.CLOSE_LOGIN_FORM
    }
}