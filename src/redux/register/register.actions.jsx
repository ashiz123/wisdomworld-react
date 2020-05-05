import axios from "axios";
import {RegisterActionTypes} from '../register/register.actionType';




const baseUrl = 'http://localhost:8000/api/v1';

export const RegisterUser =  user =>async (dispatch) =>
{
         dispatch(requestRegister(user));
        return await axios.post(`${baseUrl}/register`, user)
          
          .then(
            response => {
            try{
              dispatch(successRegister(response.data.success.user));
              localStorage.setItem('token', response.data.success.token) 
              
            } 
            catch(err){
              console.log("Error:", err.message);
            }
            
          },
          error => {
            dispatch(failureRegister(error.toString()));
            // dispatch(alertActions.error(error.toString()));
        }
          
          )
          .catch(function (error) {
            console.log(error);
            dispatch(failureRegister(error));
          });

          function requestRegister(user) {return {type:RegisterActionTypes.REGISTER_REQUEST, user}}
          function successRegister(user) { return { type: RegisterActionTypes.REGISTER_SUCCESS, user } }
          function failureRegister(error) { return { type: RegisterActionTypes.REGISTER_FAILURE, error } }
          // function failure(error) { return { type: userConstants.REGISTER_FAILURE, error } }
         
         
            
}


// export const getProfileFetch =  => async{
  
//     const token = localStorage.getItem('token');
//     if (token) {
//       return fetch("http://localhost:3000/api/v1/profile", {
//         method: "GET",
//         headers: {
//           'Content-Type': 'application/json',
//           Accept: 'application/json',
//           'Authorization': `Bearer ${token}`
//         }
//       })
//         .then(resp => resp.json())
//         .then(data => {
//           if (data.message) {
//             // An error will occur if the token is invalid.
//             // If this happens, you may want to remove the invalid token.
//             localStorage.removeItem("token")
//           } else {
//             dispatch(loginUser(data.user))
//           }
//         })
//     }
//   }









//only for testing
// function testAction(token){
//   return {
//     type: 'TEST',
//     payload: token
//   }
// }











