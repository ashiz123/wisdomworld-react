
import {UserActionTypes} from '../user/user.actionTypes';


export function successUpdateProfile(data){
    return{
        type : UserActionTypes.UPDATE_USER_PROFILE_DETAIL,
        payload: data
    }
}

export function failedUpdateProfile(error){
    return{
        type : UserActionTypes.UPDATE_USER_PROFILE_FAILED,
        payload: error
    }
}

