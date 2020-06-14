import {createSelector} from 'reselect';


const statePost = state => state.post;


export const selectPosts = createSelector(
    [statePost],
    post => post.posts
)


export const statusPost = createSelector(
    [statePost],
    status => status.pending
)


export const selectPostById = id => createSelector(
    [selectPosts],
    posts => posts.find(post=> post.id === id)
)



// posts data are responsed in array , so its not used. if data is object it can be used.
// export const selectPostsPreview = createSelector(
//     [selectPosts],
//     allPosts => Object.keys(allPosts).map(key=> allPosts[key])

// )

// export const postToView = createSelector(
//     [selectPostsPreview],
//     viewPost => viewPost[0]
// )

