import {notificationTypes} from './notifications.actionTypes';
const intitialState = {
    notifications : {}
   
}



export const notificationReducers = (state = intitialState, action) => {
    switch(action.type)
    {
        case notificationTypes.ADD_NOTIFICATION:
            return {...state, notifications: action.notification }


        default:
            return state;
    }
}