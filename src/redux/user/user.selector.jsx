import {createSelector} from 'reselect';


const stateUserRegister = state => state.register;


export const selectCurrentUser = createSelector(
    [stateUserRegister],
    user => user.currentUser
)

// export const selectPostsPreview = createSelector(
//     [selectPosts],
//     allPosts => Object.keys(allPosts).map(key=> allPosts[key])

// )

// export const postToView = createSelector(
//     [selectPostsPreview],
//     viewPost => viewPost[0]
// )