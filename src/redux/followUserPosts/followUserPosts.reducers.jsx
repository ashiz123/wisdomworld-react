import {followUserPostsActionTypes} from './followUserPosts.actionTypes'


const initialValue= {
    posts: [], 
    pending: false, 
    error: null
}

export const followUserPostsReducers = (state = initialValue, action) => {
    switch(action.type)
    {
        case followUserPostsActionTypes.FOLLOW_USER_POSTS_PENDING:
            return {...state, pending:true, error: null}


            case followUserPostsActionTypes.FOLLOW_USER_POSTS_SUCCESS:
                return {...state, pending:false, error: null, posts:action.payloads}

                case followUserPostsActionTypes.FOLLOW_USER_POSTS_FAILURE:
                    return {...state, pending:true, error: action.payloads}


                default:
                return state;
    }

    
}