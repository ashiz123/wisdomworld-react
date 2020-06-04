import {createSelector} from 'reselect';

const statePost = state => state.profile;

export const selectCurrentUserPosts = createSelector(
    [statePost],
     post => post.posts.data
)


// export const selectPostsPreview = createSelector(
//     [selectPosts],
//     allPosts => Object.keys(allPosts).map(key=> allPosts[key])

// )

// export const currentUserPost = createSelector(
//     [selectPostsPreview],
//     currentPost => currentPost[0]
// )

export const currentUserPostStatus = createSelector(
    [statePost],
    currentUserPostStatus => currentUserPostStatus.status
)


export const currentUserError = createSelector(
    [statePost],
    currentUserPostError => currentUserPostError.error
)
