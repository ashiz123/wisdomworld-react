import {fetchPostsPending, fetchPostsSuccess, fetchPostsError, } from './post.actions';
import {ProfileActionTypes} from '../profile/profile.actiontypes';
import axios from 'axios';
import {baseUrl} from '../base';

 function fetchPosts(){

    return async dispatch => {
        dispatch(fetchPostsPending());
        const token = localStorage.getItem('token');
        await axios.get(`${baseUrl}/posts` , {headers : {
            'content-type':' application/json',
            'Authorization':  `Bearer ${token}`
        }}) 
        .then(
            (response) => {
                if(response.error){
                   throw(response.error);
                }  
                // console.log(response.data)
                dispatch(fetchPostsSuccess(response.data))
            }
        )
    
        .catch(error => {
        dispatch(fetchPostsError(error));
         })
   
        }
 }
    
export default fetchPosts;



