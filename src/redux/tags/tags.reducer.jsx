import React from 'react';
import {TagActionTypes} from './tags.actionTypes';

const initialState = {
    tags : [],
    pending: false,
    error: null
}


export const TagsReducer = (state = initialState, action)  =>
{
    switch(action.type){
        case TagActionTypes.FETCH_TAGS_PENDING:
           return {...state, pending: true}

          
          
        case TagActionTypes.FETCH_TAGS_SUCCESS:
            return {...state, pending: false, tags:action.payload}
       
         


        case TagActionTypes.FETCH_TAGS_FAILURE:
        return {...state, pending: false,   error:action.payload}

         default:
          return state;
      

            
    }

    

}


// export const getTags = (state) => state.tags;
// export const getPostsPending = (state) => state.pending;
// export const getPostsError = (state) => state.error;