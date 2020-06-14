import axios from 'axios';
import {baseUrl} from '../base';
import {followUserPostsActionTypes} from '../../redux/followUserPosts/followUserPosts.actionTypes';
import {getFollowedUserPostsSuccess, getFollowedUserPostsPending, getFollowedUserPostsFailure} from '../../redux/followUserPosts/followUserPosts.actions';


export const fetchPaginate = (currentUser, pageNumber) => 
{
    return async dispatch => 
    {
        dispatch(getFollowedUserPostsPending());
        const token = localStorage.getItem('token');
        await axios.get(`${baseUrl}/getAuthUserFollowedPosts/${currentUser.id}/?page=${pageNumber}` , {headers : {
            'content-type':' application/json',
            'Authorization':  `Bearer ${token}`, 
            'Accept' : 'application/json'
        }}) 
        .then(response => {
            // console.log(response.data);
            // test= response.json(response.data.data);
            var arrayObject = Object.keys(response.data.data).map(i => response.data.data[i])
            response.data.data = arrayObject
            console.log(response.data);
            dispatch(getFollowedUserPostsSuccess(response.data));
            // const pagination = Object.keys(response.data)
            // dispatch(getFollowedUserPostsSuccess(test));
        })
        .catch(error => 
            {
                dispatch(getFollowedUserPostsFailure(error));
            })
    }

}