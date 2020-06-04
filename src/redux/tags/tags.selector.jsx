import {createSelector} from 'reselect';


const stateTag = state => state.Tag


export const selectAllTags = createSelector(
    [stateTag],
     Tag => Tag.tags
)