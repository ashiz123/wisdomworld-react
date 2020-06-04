// import {profilePostFailure, profilePostSuccess, profilePostPending} from './profile.actions';
import axios from 'axios';
import {baseUrl} from '../base';
import {successUpdateProfile, pendingUpdateProfile, failedUpdateProfile} from './updateProfile.actions';
import {UserActionTypes} from '../user/user.actionTypes';


 export const fetchUpdateProfile = (values, userId) => async dispatch => 
 {
     
    // dispatch(pendingUpdateProfile());
     const token = localStorage.getItem('token');
     await axios.post(`${baseUrl}/userDetail/${userId}`, values,  {headers: {
             'content_type': 'application/json',
             'Authorization': `Bearer ${token}`
         }}).then(
             response => {
                 if(response.error){
                     throw(response.error);
                  }  
                 dispatch(successUpdateProfile(response.data))
                 console.log(response.data)
             }
         )
     
         .catch(error => {
             dispatch(failedUpdateProfile(error))
             console.log(error);
            
         })
   
 
 }


 export const uploadImage = (image, userId) =>async dispatch =>
 {

    let form_data =  new FormData();
    form_data.append('image', image);


    const token = localStorage.getItem('token');
    await axios.post(`${baseUrl}/uploadProfilePicture/${userId}`,form_data, {headers: {
        'content-type':' application/json',
        'Authorization':  `Bearer ${token}`
    }}).then(response => 
        {
            // console.log(response.data.profile_image);
            dispatch(uploadProfileSuccessful(response.data.profile_image));
        }
        
        )
    .catch(error => console.log(error))
}
 



function uploadProfileSuccessful(filename){
    return{
        type: UserActionTypes.UPLOAD_IMAGE_SUCCESSFUL,
        payload:filename
    }
}
 