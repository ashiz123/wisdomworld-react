import {createSelector} from 'reselect';


const stateFollowUserStatus = state => state.FollowUser;


export const selectFollowUserStatus = createSelector(
    [stateFollowUserStatus],
     status => status.follow
)