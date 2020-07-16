import axios from 'axios';
import { UserActionTypes } from './user.actionTypes';
import {persistor} from '../../redux/configureStore';
import storage from 'redux-persist/lib/storage';





const baseUrl = "http://localhost:8000/api/v1"

export const getProfileFetch = () =>async (dispatch) => {
 
    const token = localStorage.getItem('token');
     
   
    if (token){
      return await axios.get(`${baseUrl}/user`, {headers: {
        'Authorization': `Bearer ${token}`
      }
    })
      .then(response =>{
          dispatch(setCurrentUser(response.data.data))
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
   dispatch(setCurrentUserPending())
    return await axios.post(`${baseUrl}/login`, user, {
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => {
       if(response.status === 200)
       {
          localStorage.setItem('token', response.data.data.token);
         
        dispatch(setCurrentUser(response.data.data.user));
        
        // window.location.reload(false);
      
       }else{
         throw(response.error);
         
       }
      
    })

   .catch(function (error) {
    if (error.response.status=== 403 ) 
      {
        console.log('user unauthenticated');
        dispatch(handleError(error.response.status));
        
      }

      else if(error.response.status === 401)
      {
       dispatch(handleError(error.response.status));
      }

      else{
        console.log(error.response.status);
      }
      
   
   
})}


  


  export const logoutUser = (user) => dispatch =>
  {
    const token = localStorage.getItem('token');
    if (token){
     
        localStorage.removeItem('token');
        storage.removeItem('persist:root')
         dispatch(removeUser());
        window.location.reload(false);
       
        
       
    }else{
        console.log('No any user');
    }
  }



  export function socialLogin(credential){
     
    return async dispatch => {

      dispatch(setCurrentUserPending())
        return await axios.post(`${baseUrl}/googleLogin`, credential, {
            headers: {
                'content-type': 'application/json'
            }
        }).then(response => 
          {
          if(response.status === 200)
          {
            if(response.data === "user not registered")
            {
               throw(response.data)
            }
             localStorage.setItem('token', response.data.data.token);
             dispatch(setCurrentUser(response.data.data.user));
           
           // window.location.reload(false);
         
          }
          else{
            throw(response.error);
            
          }
    
       }
        // console.log(response)
       )
       .catch(function (error) {
        // if (error.response.status=== 403 ) 
        //   {
        //     console.log('user unauthenticated');
        //     dispatch(handleError(error.response.status));
            
        //   }
    
        //   else if(error.response.status === 401)
        //   {
        //    dispatch(handleError(error.response.status));
        //   }

        //   else if(error.response === 'user not registered')
        //   {
        //     console.log('user not registered yet');
        //   }
    
        //   else{
        //     console.log(error.response.status);
        //   }
          
        console.log(error);
       
    })

        // dispatch(setCurrentUserPending())
        

}}




  function handleError(currentStatus) {return {type:UserActionTypes.ERROR, status: currentStatus}}
  export function setCurrentUser(user) {return {type: UserActionTypes.SET_CURRENT_USER, payload: user}}
  function setCurrentUserPending() {return {type: UserActionTypes.SET_CURRENT_USER_PENDING}}
  function removeUser() {return {type: UserActionTypes.REMOVE_USER }}
  