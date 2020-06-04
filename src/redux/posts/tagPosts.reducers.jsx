import {PostActionTypes} from './post.actionTypes';

const initialState = {
    pending:false,
    tagPosts: [],
    error: null
}

export function TagPostsReducers(state= initialState, action)
{
    switch(action.type)
    {

        case PostActionTypes.FETCH_TAG_POSTS_PENDING:
           return{...state, pending: true,  tagPosts: []}
        
        case PostActionTypes.FETCH_TAG_POSTS_SUCCESS:
           return{...state, tagPosts:action.payload, pending:false}

        case PostActionTypes.FETCH_TAG_POSTS_SUCCESS:
           return{...state, tagPosts:action.payload, pending: false}

       

        default:
            return state;

                


    }
}


