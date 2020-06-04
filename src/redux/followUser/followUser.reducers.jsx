import {followUserActionTypes} from './followUser.actionTypes';

const initialState = {
    follow : [],
    pending: false,
    error: null
}


export const FollowUserReducer = (state = initialState, action) => {
 switch(action.type){
     case followUserActionTypes.GET_FOLLOW_USER_PENDING:
         return {...state};


     case followUserActionTypes.GET_FOLLOW_USER_SUCCESS:
         return{...state, pending: false, follow: action.payloads}  



       
 


    default:
        return state;

 }}