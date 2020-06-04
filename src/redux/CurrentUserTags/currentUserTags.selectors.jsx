import {createSelector} from 'reselect';

const stateTag = state => state.CurrentUserTags;

export const selectCurrentUserTags = createSelector(
    [stateTag],
     currentUser => currentUser.tags
)


