import axios from 'axios';
import {baseUrl} from '../base';
import {likePost, unlikePost,fetchLikePending, fetchLikeAlready, fetchLikeError} from '../posts/post.actions';

export function fetchLikePost(likeId, postId)
{
    return async dispatch =>
    {
        dispatch(fetchLikePending());
        let likeObj = {};
        likeObj.like_id  = likeId;
        likeObj.post_id = postId;
      

        const token = localStorage.getItem('token');
        await axios.post(`${baseUrl}/post_like`, likeObj, {headers: {
            'Authorization': `Bearer ${token}`,
            'content-type': 'application/json'
        }})
        .then(response =>
            {
                if(response.data === 'like'){
                    dispatch(likePost());
                    console.log(response);
                }else{
                    dispatch(unlikePost());
                }
               
               

            } )
        .catch(error => 
            dispatch(fetchLikeError(error))
            );
        
        
    }
}