import {createSelector} from 'reselect';

const stateFetchedUserPosts = state => state.FollowUserPosts;

export const selectFollowedUserPosts = createSelector(
    [stateFetchedUserPosts],
    fetchUser => fetchUser.posts
)

export const selectFollowedUserPostsStatus = createSelector(
    [stateFetchedUserPosts],
    fetchUserStatus => fetchUserStatus.pending
)