import React from 'react'

export default function Notifications(props) {
    
    return (
        <div>
           {
               props.notifications &&
             
               props.notifications.map((notification) => {
                   return(
                       <div>
                           {notification.data.body}
                       </div>
                   )
               } )
           }
        </div>
    )
}
