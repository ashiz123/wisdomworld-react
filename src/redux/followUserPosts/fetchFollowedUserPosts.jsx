import axios from 'axios';
import {baseUrl} from '../base';
import {getFollowedUserPostsFailure, getFollowedUserPostsPending, getFollowedUserPostsSuccess} from './followUserPosts.actions';


export function fetchFollowedUserPosts(id){
 
    return async dispatch => {
       
        dispatch(getFollowedUserPostsPending());
        const token = localStorage.getItem('token');
        await axios.get(`${baseUrl}/getAuthUserFollowedPosts/${id}`, {
            headers : {
                'content-type':' application/json',
                'Authorization' : `Bearer ${token}`
            }
        })   
        .then((response) =>{
           
            dispatch(getFollowedUserPostsSuccess(response.data));
            
        })
        .catch(error =>{
            dispatch(getFollowedUserPostsFailure(error));
             console.log(error)
            })
    }

}
   
