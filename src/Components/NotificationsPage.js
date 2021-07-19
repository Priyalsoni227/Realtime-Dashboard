import React from 'react'
import {Card} from "@material-ui/core"
import './css/NotificationsPage.css'
import {NotificationsNone,Close} from '@material-ui/icons/';

export const NotificationsPage = () => {
    return (
        <div className="notifications-container">
            <Card>
           
           <div className="noti-item">
               
               <div className="icon"><NotificationsNone/></div>
               <div className="noti-text">Machine1 started</div>
               <div className="noti-time">
                   <div className="date">Wed June 30,2021</div>
                   <div className="time">16:34:30</div>
               </div>
               <div className="close"><Close/></div>
           </div>
           <div className="noti-item">
               
               <div className="icon"><NotificationsNone/></div>
               <div className="noti-text">Machine1 started</div>
               <div className="noti-time">
                   <div className="date">Wed June 30,2021</div>
                   <div className="time">16:34:30</div>
               </div>
               <div className="close"><Close/></div>
           </div>
           <div className="noti-item">
               
               <div className="icon"><NotificationsNone/></div>
               <div className="noti-text">Machine1 started</div>
               <div className="noti-time">
                   <div className="date">Wed June 30,2021</div>
                   <div className="time">16:34:30</div>
               </div>
               <div className="close"><Close/></div>
           </div>
           <div className="noti-item">
               
               <div className="icon"><NotificationsNone/></div>
               <div className="noti-text">Machine1 started</div>
               <div className="noti-time">
                   <div className="date">Wed June 30,2021</div>
                   <div className="time">16:34:30</div>
               </div>
               <div className="close"><Close/></div>
           </div>
           <div className="noti-item">
               
               <div className="icon"><NotificationsNone/></div>
               <div className="noti-text">Machine1 started</div>
               <div className="noti-time">
                   <div className="date">Wed June 30,2021</div>
                   <div className="time">16:34:30</div>
               </div>
               <div className="close"><Close/></div>
           </div>
            </Card>
        </div>
    )
}
