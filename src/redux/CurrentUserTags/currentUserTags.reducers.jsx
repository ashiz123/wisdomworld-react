import {currentUserTagsActionTypes} from './currentUserTags.actionTypes'
import {addTagUser} from './currentUserTag.utils';

const initialState = {
    tags : [],
    pending: false,
    error: null
}

export const currentUserTagsReducer = (state = initialState, action) => {
    switch(action.type)
    {
        case currentUserTagsActionTypes.USER_TAGS_PENDING:
            return {...state, pending:true}

            case currentUserTagsActionTypes.USER_TAGS:
            return {...state, tags: action.payload, pending:false}



            case currentUserTagsActionTypes.USER_TAGS_SUCCESS:
                return{...state, tags: state.tags.concat(action.payload)}


                // return {
                //     ...state,
                //     photo: state.photo.concat([action.photo])
                //   }

                

            default:
            return state;
    }
}