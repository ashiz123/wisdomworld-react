// import {baseUrl} from '../base';
// import axios from 'axios';
import {PostActionTypes} from './post.actionTypes';


export function fetchPostsPending()
{
    return{
        type: PostActionTypes.FETCH_POST_PENDING
    }
}


export function fetchPostsSuccess(posts)
{
   
    return{
        type: PostActionTypes.FETCH_POST_SUCCESS,
        payload : posts
    }
}

export function fetchPostsError(error)
{
    return{
        type: PostActionTypes.FETCH_POST_ERROR,
        payload: error
    }
}

export function fetchTagPostPending()
{
    return{
        type: PostActionTypes.FETCH_TAG_POSTS_PENDING
    }
}

export function fetchTagPostsSuccess(posts)
{
   
    return{
        type: PostActionTypes.FETCH_TAG_POSTS_SUCCESS,
        payload : posts
    }
}

export function fetchTagPostsFailure(error)
{
    return{
        type: PostActionTypes.FETCH_TAG_POSTS_FAILURE,
        payload: error
    }
}


export function fetchFollowedUserPostsSuccess(data)
{
    return{
        type: PostActionTypes.FETCH_FOLLOWED_USER_POSTS_SUCCESS,
        payload: data
    }
}


export function likePost()
{
    return {
        type : PostActionTypes.LIKE_POST
    }
}


export function unlikePost()
{
    return {
        type : PostActionTypes.UNLIKE_POST
    }
}



export function fetchLikeError(error)
{
    return{
        type: PostActionTypes.LIKE_ERROR,
        payload: error
    }
}


export function fetchLikePending()
{
    return {
        type: PostActionTypes.LIKE_PENDING
    }
}


export function commentSuccess(comment)
{
    return{
        type: PostActionTypes.COMMENT_SUCCESS,
        payload: comment
    }
}


export function commentPending()
{
    return{
        type: PostActionTypes.COMMENT_PENDING,
        
    }
}


