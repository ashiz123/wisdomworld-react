import axios from 'axios';
import { UserActionTypes } from './user.actionTypes';


const baseUrl = "http://localhost:8000/api/v1"

export const getProfileFetch = () =>async (dispatch) => {
    const token = localStorage.getItem('token');
     
   
    if (token){
      return await axios.get(`${baseUrl}/user`, {headers: {
        'Authorization': `Bearer ${token}`
      }
    })
      .then(response =>{
         dispatch(setCurrentUser(response.data.success))
      },
      error =>{
        console.log(error);
      }
      )
    }
    else{
      console.log('server is not connected');
       
    }
}


export const userLogin = user =>async (dispatch) =>
{
    return await axios.post(`${baseUrl}/login`, user, {
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => {
        localStorage.setItem('token', response.data.success.token);
        dispatch(setCurrentUser(response.data.success.user))
    })
    // console.log(user);
}


  


  export const logoutUser = (user) => dispatch =>
  {
    const token = localStorage.getItem('token');
    if (token){
        localStorage.removeItem('token');
        dispatch(removeUser(user));
    }else{
        console.log('No any user');
    }
  }


  function setCurrentUser(user) {return {type: UserActionTypes.SET_CURRENT_USER, payload: user}}
  function removeUser(user) {return {type: UserActionTypes.REMOVE_USER, payload: user }}