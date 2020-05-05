import {PostActionTypes} from './post.actionTypes';

const initialState = {
    pending:false,
    posts: [],
    error: null
}

export function PostReducers(state= initialState, action)
{
    switch(action.type)
    {
        case PostActionTypes.FETCH_POST_PENDING:
            return{
                ...state,
                pending: true
            }

        case PostActionTypes.FETCH_POST_SUCCESS:
            
            return{
                ...state,
                pending: false,
                posts: action.payload
            }

        case PostActionTypes.FETCH_POST_ERROR:
        return{
            ...state,
            pending: false,
            error: action.payload
        }

        default:
            return state;

                


    }
}


export const getPosts = (state) => state.posts;
export const getPostsPending = (state) => state.pending;
export const getPostsError = (state) => state.error;