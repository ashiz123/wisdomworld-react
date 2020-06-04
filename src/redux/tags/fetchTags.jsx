import {TagActionTypes} from './tags.actionTypes';
import {fetchTagPendings, fetchTagSuccess, fetchTagFailure} from './tags.action';
import axios from 'axios';
import {baseUrl} from '../base';



export const fetchTags = () => async dispatch =>
{
    dispatch(fetchTagPendings());
    const token = localStorage.getItem('token');
    axios.get(`${baseUrl}/tags`, {headers: {
        'content-type':' application/json',
        'Authorization':  `Bearer ${token}`
    }})
    .then(response => {
        if(response.error)
        {
            throw(response.error);
        }
           dispatch(fetchTagSuccess(response.data.data));
     })


    .catch(error => 
        {
            console.log(error);
            dispatch(fetchTagFailure(error));
        })
}


