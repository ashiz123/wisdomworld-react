import axios from 'axios';
import {baseUrl} from '../base';
import {userTagsPending, userTagsFailed, userTagsSuccess, userTags} from './currentUserTags.actions';



export function fetchSubscribeTags(userId, tag_id)
{


    var formData = new FormData();
    formData.append("tag_id", tag_id);
   
  
    return async dispatch => {
        
        dispatch(userTagsPending())
        const token = localStorage.getItem('token');
        
        axios.post(`${baseUrl}/subscribeTag/${userId}`,formData, {headers: {
            'content-type': 'application/json',
            'Authorization' : `Bearer ${token}`,
            'accept' : `application/json`
        }})
        .then(response => {
            if(response.error)
            {
                throw(response.error)
            }
            if(response.data !== 'already_created')
            {
                console.log(response);
                dispatch(userTagsSuccess(response.data))
              
            }

        })

        .catch(error => {
            console.log(error);
            dispatch(userTagsFailed())
        })
        

    }
}

export function fetchCurrentUserTags(userId)
{
    return dispatch => 
    {
        dispatch(userTagsPending())
        const token = localStorage.getItem('token');
        
        axios.get(`${baseUrl}/tags/${userId}`, {headers: {
            'content-type': 'application/json',
            'Authorization' : `Bearer ${token}`,
            
        }})
        .then(response => {
            console.log(response);
            dispatch(userTags(response.data.data));
        })
        .catch(error => console.log(error))
    }
}