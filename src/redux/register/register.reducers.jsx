import {RegisterActionTypes} from './register.actionType';
import { UserActionTypes } from '../user/user.actionTypes';


const initialState = {
    registering: false,
    isLoggedIn: false,
    token: '',
    currentUser : {
      
    }
   
  };

export function RegisterReducer(state = initialState, action) {
  switch (action.type) {
    case RegisterActionTypes.REGISTER_REQUEST:
      return { registering: true, isLoggedIn:false, currentUser:{} };

      case RegisterActionTypes.REGISTER_SUCCESS://here payload is action.user
      
      return {...state, currentUser:action.user, isLoggedIn:true}
      
      case RegisterActionTypes.REGISTER_FAILURE:
        return {};

        case UserActionTypes.SET_CURRENT_USER:
          return {...state, currentUser: action.payload}


          case UserActionTypes.REMOVE_USER:
            return {...state,  currentUser: {}}

           

        // case 'TEST':
        //   return {...state, token: action.payload};

         



        



     default:
      return state;
  }
  }

  