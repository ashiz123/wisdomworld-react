import {TagActionTypes} from './tags.actionTypes';

export function fetchTagPendings(){

    return {
        type : TagActionTypes.FETCH_TAGS_PENDING
    }
  
}


export function fetchTagSuccess(tags){
    return{
        type: TagActionTypes.FETCH_TAGS_SUCCESS,
        payload: tags
    }
}


export function fetchTagFailure(error){
    return{
        type: TagActionTypes.FETCH_TAGS_FAILURE,
        payload: error
    }
}

