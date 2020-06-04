import {updateProfileActionTypes} from './updateProfile.actionTypes';
import produce from "immer";

const initialState = {
    userDetails : null,
    pending: false,
    error: null
    

}



export const updateProfileReducers = (state=[] , action) => 
{
    switch(action.type)
    {
        case (updateProfileActionTypes.UPDATE_PROFILE_PENDING):
         return {...state, pending: true, error:null,}

         case (updateProfileActionTypes.UPDATE_PROFILE_SUCCESS):
        return {...state, register:{...state.register, currentUser: {...state.register.currentUser, other: action.payload}}}
         
        

         case (updateProfileActionTypes.UPDATE_PROFILE_FAILED):
         return {...state, pending: false, error:action.payload,}




        default: 
        return state;
    }
}

// function updateVeryNestedField(state, action) {
//     return {
//       ...state,
//       first: {
//         ...state.first,
//         second: {
//           ...state.first.second,
//           [action.someId]: {
//             ...state.first.second[action.someId],
//             fourth: action.someValue
//           }
//         }
//       }
//     }
//   }  return {
