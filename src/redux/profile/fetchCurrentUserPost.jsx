import {profilePostFailure, profilePostSuccess, profilePostPending} from './profile.actions';
import axios from 'axios';
import {baseUrl} from '../base';


 export const fetchCurrentUserPost = (currentUserId) => async dispatch => 
 {
     dispatch(profilePostPending())
     const token = localStorage.getItem('token');
     await axios.get(`${baseUrl}/post/${currentUserId}`, {headers: {
         'content_type': 'application/json',
         'Authorization': `Bearer ${token}`
     }}).then(
         response => {
             if(response.error){
                 throw(response.error);
              }  
             dispatch(profilePostSuccess(response.data))
             // console.log(response.data)
         }
     )
 
     .catch(error => {
         dispatch(profilePostFailure(error))
        
     })
 
 }
 
 