import {baseUrl} from '../base';
import axios from 'axios';

export function addPost(state, userId)
{
    return async dispatch => {

//Icannot pass array of objects directly using form data, so creating array that hold the ids of tags and passed.
            const tagIds = [];
                state.selectedOption.map((option) => {
                    return(
                    tagIds.push(option.value)
                    )
                })

        let form_data =  new FormData();
        form_data.append('title', state.title);
        form_data.append('description', state.description);
        form_data.append('link', state.link);
        form_data.append('author', state.author);
        form_data.append('image', state.image);
        form_data.append('publish', state.checked);
        form_data.append('user_id', userId);
        form_data.append('tags', tagIds);
       


        const token = localStorage.getItem('token');
        await axios.post(`${baseUrl}/create_post`,form_data, {headers: {
            'content-type':' application/json',
            'Authorization':  `Bearer ${token}`
        }}).then(response => console.log(response.data))
        .catch(error => console.log(error))
    }
    
}


