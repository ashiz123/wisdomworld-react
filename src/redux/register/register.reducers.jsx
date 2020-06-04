import {RegisterActionTypes} from './register.actionType';
import { UserActionTypes } from '../user/user.actionTypes';


const initialState = {
    
    registering: false,
    loading_logging: false,
    currentUser : {},
    status : null,
    error: null,

   
  };

export function RegisterReducer(state = initialState, action) {
  switch (action.type) {
    case RegisterActionTypes.REGISTER_REQUEST:
      return { registering: true, loading_logging:true, currentUser:{} };

      case RegisterActionTypes.REGISTER_SUCCESS://here payload is action.user
      return {...state, currentUser:action.user, loading_logging:false, status:200}
      
      case RegisterActionTypes.REGISTER_FAILURE:
        return {};

     case UserActionTypes.SET_CURRENT_USER:
          return {...state, currentUser: action.payload, loading_logging:false, status:200}


      case UserActionTypes.ERROR:
          return{...state, status:action.status}     


      case UserActionTypes.REMOVE_USER:
            return {...state,  currentUser: {}}

      
      case UserActionTypes.UPDATE_USER_PROFILE_DETAIL:
           return {...state, currentUser: {...state.currentUser, other: action.payload}, statue: 'success_profile_update'}   


      case UserActionTypes.UPLOAD_IMAGE_SUCCESSFUL:
       
           return {...state, currentUser: {...state.currentUser, image: {...state.currentUser.image, profile_image : action.payload}}}     
           
      
      case UserActionTypes.UPDATE_USER_PROFILE_FAILED:
        return {...state, error: action.payload}


        default:
          return state;

      
      }
  }

  