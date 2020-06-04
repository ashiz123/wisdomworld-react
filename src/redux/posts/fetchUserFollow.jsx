import axios from 'axios';
import {baseUrl} from '../base';
import {getFollowUserPending, getFollowUserSuccess, getFollowUserFailure} from '../followUser/followUser.actions';


export function fetchUserFollowStatus(leaderId, followerId)
{
    return async dispatch => {
       
        dispatch(getFollowUserPending())
        const token = localStorage.getItem('token');
        await axios.get(`${baseUrl}/check_user_follow/${leaderId}/${followerId}`, {headers : {
            'content-type':' application/json',
            'Authorization':  `Bearer ${token}`
        }}).then(
            
            response =>{
                dispatch(getFollowUserSuccess(response.data));
                console.log(response);
            }
        )
        .catch(
            error => {
                dispatch(getFollowUserFailure(error))
            }
        )

       
    }
   
}


export function fetchFollowUser(leaderId, followerId)
{
    return async dispatch =>
    {
        // console.log(leaderId, followerId);
        dispatch(getFollowUserPending())
        const token = localStorage.getItem('token');
        await axios.get(`${baseUrl}/user_follow/${leaderId}/${followerId}`, {headers : {
            
            'Authorization':  `Bearer ${token}`
        }}).then(
            
            response =>{
               
                dispatch(getFollowUserSuccess(response.data));
                // document.getElementById('follow_button').setAttribute("disabled", "disabled");
                console.log(response);
            }
        )
        .catch(
            error => {
                dispatch(getFollowUserFailure(error))
            }
        )
    }
}

export function fetchUnfollowUser(leaderId, followerId)
{
    return async dispatch =>
    {
        // console.log(leaderId, followerId);
        dispatch(getFollowUserPending())
        const token = localStorage.getItem('token');
        await axios.get(`${baseUrl}/user_unfollow/${leaderId}/${followerId}`, {headers : {
            
            'Authorization':  `Bearer ${token}`
        }}).then(
            
            response =>{
                
                dispatch(getFollowUserSuccess(response.data));
                // document.getElementById('unfollow_button').setAttribute("disabled", "disabled");
                console.log(response);
            }
        )
        .catch(
            error => {
                dispatch(getFollowUserFailure(error))
            }
        )
    }
}