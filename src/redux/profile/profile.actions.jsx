import {ProfileActionTypes} from './profile.actiontypes';


export function profilePostPending()
{
    return{
        type: ProfileActionTypes.PROFILE_PENDING
    }
}


export function profilePostSuccess(posts)
{
   
    return{
        type: ProfileActionTypes.PROFILE_SUCCESS,
        payload : posts
    }
}

export function profilePostFailure(error)
{
    return{
        type: ProfileActionTypes.PROFILE_ERROR,
        payload: error
    }
}

