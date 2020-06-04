import {followUserPostsActionTypes} from './followUserPosts.actionTypes';

export function getFollowedUserPostsSuccess(posts){
    return{
        type: followUserPostsActionTypes.FOLLOW_USER_POSTS_SUCCESS,
        payloads : posts
    }
}


export function getFollowedUserPostsFailure(error){
    return{
        type: followUserPostsActionTypes.FOLLOW_USER_POSTS_FAILURE,
        payloads : error
    }
}


export function getFollowedUserPostsPending()
{
   
    return{
        type: followUserPostsActionTypes.FOLLOW_USER_POSTS_PENDING,
        
    }
}