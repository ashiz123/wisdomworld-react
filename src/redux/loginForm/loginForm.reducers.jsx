import {LoginFormActionTypes} from './loginForm.actionTypes';

const initialState = {
    isLoginFormOpen : false
}


export const LoginFormReducers = (state = initialState, action)   =>
{
    switch(action.type)
    {
        case(LoginFormActionTypes.OPEN_LOGIN_FORM):
        return {...state, toggleLoginForm:true}

        case(LoginFormActionTypes.CLOSE_LOGIN_FORM):
        return {...state, toggleLoginForm:false}

        default:
            return state;
        
    }

}


