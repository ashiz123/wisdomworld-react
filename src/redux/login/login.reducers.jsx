import {LoginActionTypes} from './login.actionTypes' ;


const initialState = {
    isLoggedIn: false
}

export const LoginReducer = (state = initialState, action )
{
    switch(action.type)
    {
        case LoginActionTypes.LOGIN_SUCCESS:
          return {...state, isLoggedIn: true}  

          case LoginActionTypes.LOGIN_FAILURE:
          return {}

         default: 
        return state;
    }
}