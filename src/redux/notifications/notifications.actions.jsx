import {notificationTypes} from './notifications.actionTypes'

export function addNotification(notification)
{
    return {
        type: notificationTypes.ADD_NOTIFICATION,
        payload: notification
    }
}