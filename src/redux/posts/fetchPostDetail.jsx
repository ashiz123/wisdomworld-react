import axios from 'axios';
import {baseUrl} from '../base';
import {PostActionTypes} from './post.actionTypes';
import {fetchPostsPending, fetchTagPostsFailure, fetchPostsSuccess} from './post.actions';

export function fetchPostDetail(id)
{
    return async dispatch => {

        dispatch(fetchPostsPending())
        const token = localStorage.getItem('token');
        await axios.get(`${baseUrl}/post/${id}`, {headers : {
            'content-type':' application/json',
            'Authorization':  `Bearer ${token}`
        }}).then(
           
           
            response =>{
                console.log(response);
               dispatch(fetchPostsSuccess(response.data));
              
            }
        )
        .catch(
            error => {
                dispatch(fetchTagPostsFailure(error))
            }
        )

       
    }
   
}

// function getPostDetailSuccess(data)
// {
//     return{
//         type: PostActionTypes.FETCH_POST_DETAIL_SUCCESS,
//         payload: data
//     }
// }