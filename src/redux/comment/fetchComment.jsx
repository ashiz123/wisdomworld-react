import axios from 'axios';
import {baseUrl} from '../base';
import {commentSuccess, commentPending } from '../posts/post.actions';


export const fetchComment = (postId, userId, comment) =>async dispatch =>
{
    dispatch(commentPending());
    let commentObj = {};
    commentObj.user_id = userId;
    commentObj.comment = comment;
    console.log(commentObj);
    const token = localStorage.getItem('token');
        await axios.post(`${baseUrl}/comment_post/${postId}`, commentObj, {headers: {
            'Authorization': `Bearer ${token}`,
            'content-type': 'application/json'
        }})
        .then(response =>
            {
                dispatch(commentSuccess(response.data))
               console.log(response);
            } )
        .catch(error => 
              console.log(error)
            );


   
}