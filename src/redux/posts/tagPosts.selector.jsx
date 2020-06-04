import {createSelector} from 'reselect';


const stateTagPosts = state => state.TagPosts;



export const selectedTagPosts = createSelector(
    [stateTagPosts],
     tag => tag.tagPosts 
) 


export const statusTagPosts = createSelector(
    [stateTagPosts],
    status => status.pending
)

