import axios from 'axios';
import {baseUrl} from '../base';
import {fetchTagPostPending, fetchTagPostsFailure, fetchTagPostsSuccess} from './post.actions';


export const fetchPostByTag = (tagName) =>async dispatch => 
{

    dispatch(fetchTagPostPending());
    const token = localStorage.getItem('token');
    await axios.get(`${baseUrl}/postByTag/${tagName}`, {headers : {
        'content-type':' application/json',
        'Authorization':  `Bearer ${token}`
    }})
    .then(
        response => {
            dispatch(fetchTagPostsSuccess(response.data.data));
           }
    )

    .catch(
        error => {
            console.log(error);
            dispatch(fetchTagPostsFailure(error));
        }
    )
}