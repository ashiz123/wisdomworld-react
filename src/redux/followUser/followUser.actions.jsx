import {followUserActionTypes} from './followUser.actionTypes';


export function getFollowUserPending()
{
    return{
        type: followUserActionTypes.GET_FOLLOW_USER_PENDING,
        }
}

export function getFollowUserSuccess(data)
{
    return{
        type: followUserActionTypes.GET_FOLLOW_USER_SUCCESS,
        payloads: data
        }
}


export function getFollowUserFailure()
{
    return{
        type: followUserActionTypes.GET_FOLLOW_USER_ERROR,
        }
}