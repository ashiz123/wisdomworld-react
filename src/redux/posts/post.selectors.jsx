import {createSelector} from 'reselect';


const statePost = state => state.post;


export const selectPosts = createSelector(
    [statePost],
    post => post.posts
)

export const selectPostsPreview = createSelector(
    [selectPosts],
    allPosts => Object.keys(allPosts).map(key=> allPosts[key])

)

export const postToView = createSelector(
    [selectPostsPreview],
    viewPost => viewPost[0]
)

