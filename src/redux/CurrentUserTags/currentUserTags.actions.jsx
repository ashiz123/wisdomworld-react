import {currentUserTagsActionTypes} from './currentUserTags.actionTypes';

export function userTagsPending()
{   
    return{
        type: currentUserTagsActionTypes.USER_TAGS_PENDING
    }

}


export function userTagsSuccess(data)
{   
    return{
        type: currentUserTagsActionTypes.USER_TAGS_SUCCESS,
        payload: data
    }

}


export function userTagsFailed()
{   
    return{
        type: currentUserTagsActionTypes.USER_TAGS_FAILURE
    }

}


export function userTags(data)
{
    return{
        type: currentUserTagsActionTypes.USER_TAGS,
        payload: data
    }
}