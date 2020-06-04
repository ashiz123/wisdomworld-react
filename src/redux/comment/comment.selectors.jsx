import {createSelector} from 'reselect';

 const statePost = state => state.post.posts;



export const selectComments = createSelector(
    [statePost],
    post => post.comments
)