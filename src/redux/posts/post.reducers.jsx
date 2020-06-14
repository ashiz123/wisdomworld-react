import {PostActionTypes} from './post.actionTypes';

const initialState = {
    pending:false,
    posts: [],
    error: null,
    like_loading: false,
    comment_loading: false
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

        case PostActionTypes.LIKE_PENDING:
            return{
                ...state, like_loading:true
            }

        case PostActionTypes.LIKE_POST:
            
        return {
            ...state, posts:{...state.posts, like_count: state.posts.like_count +1},  like_loading:false
        }
       
        case PostActionTypes.LIKE_ERROR:
            return {...state, error: action.payload, like_loading:false}


        case PostActionTypes.UNLIKE_POST:
           return {
                ...state, posts:{...state.posts, like_count: state.posts.like_count - 1},  like_loading:false
            }

        case PostActionTypes.COMMENT_SUCCESS:
            return{
               ...state, comment_loading:false,  posts:{...state.posts,comment_count: state.posts.comment_count+1, comments:[...state.posts.comments, action.payload]}
           }     
        // state.posts.comments.concat(action.portfolio)

        case PostActionTypes.COMMENT_PENDING:
            return{...state, comment_loading:true}
      


        default:
            return state;


        

                


    }
}


export const getPosts = (state) => state.posts;
export const getPostsPending = (state) => state.pending;
export const getPostsError = (state) => state.error;