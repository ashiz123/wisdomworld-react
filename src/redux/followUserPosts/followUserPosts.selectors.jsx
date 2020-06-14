import {createSelector} from 'reselect';

const stateFetchedUserPosts = state => state.FollowUserPosts;

export const selectFollowedUserPosts = createSelector(
    [stateFetchedUserPosts],
    fetchUser => fetchUser.posts.data
)

export const selectFollowedUserPostsStatus = createSelector(
    [stateFetchedUserPosts],
    fetchUserStatus => fetchUserStatus.pending
)

export const selectFilteredPosts = createSelector(
    [stateFetchedUserPosts],
    filter => filter.filteringPosts
)

export const selectFollowedUserPostsPagination = createSelector(
    [stateFetchedUserPosts],
    pagination => pagination.posts
)


