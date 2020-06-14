import {createSelector} from 'reselect';


export const stateUserRegister = state => state.register;



export const selectCurrentUser = createSelector(
    [stateUserRegister],
    user => user.currentUser
)


export const selectLoginErrorStatus = createSelector(
    [stateUserRegister],
    user => user.status 
)

export const selectIsLoggedIn = createSelector(
    [stateUserRegister],
    user => user.loading_logging
)


export const selectNotifications = createSelector(
    [selectCurrentUser],
    user => user.notifications
)




// export const selectPostsPreview = createSelector(
//     [selectPosts],
//     allPosts => Object.keys(allPosts).map(key=> allPosts[key])

// )

// export const postToView = createSelector(
//     [selectPostsPreview],
//     viewPost => viewPost[0]
// )