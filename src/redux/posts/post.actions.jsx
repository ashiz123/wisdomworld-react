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

