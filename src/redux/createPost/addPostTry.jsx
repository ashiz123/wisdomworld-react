import {baseUrl} from '../base';
import axios from 'axios';

export function addPostTry(data, userId, selectedOption)
{
    return async dispatch => {

//Icannot pass array of objects directly using form data, so creating array that hold the ids of tags and passed.
            const tagIds = [];
                selectedOption.map((option) => {
                    return(
                    tagIds.push(option.value)
                    )
                })
                
                console.log(tagIds);

        let form_data =  new FormData();
        form_data.append('title', data.title);
        form_data.append('description', data.description);
        form_data.append('link', data.link);
        form_data.append('author', data.author);
        form_data.append('image', data.image[0]);
        form_data.append('publish', data.publish);
        form_data.append('user_id', userId);
        form_data.append('tags', tagIds);
       

        console.log(form_data);

        const token = localStorage.getItem('token');
        await axios.post(`${baseUrl}/create_post`,form_data, {headers: {
            'content-type':' application/json',
            'Authorization':  `Bearer ${token}`
        }}).then(response =>{
            console.log(response.data, 'it works');
        })
        .catch(error => console.log(error))
    }
    
}


