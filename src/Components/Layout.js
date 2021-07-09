import React from 'react'
import Drawer from '@material-ui/core/Drawer'
import Typography from '@material-ui/core/Typography'
import {makeStyles} from '@material-ui/core/styles'
import {Dashboard, Timeline, DateRange, Person} from '@material-ui/icons'
import './css/Layout.css'
import { HeaderMain } from './HeaderMain'
import {BrowserRouter,Route,Switch, Link} from "react-router-dom"
import { Notifications} from '@material-ui/icons'
// import { Charts } from './Charts'

// import { DashboardPage } from './DashboardPage'
// import CalendarPage from './CalendarPage'
import { Workstations } from './Workstations'
import { NotificationsPage } from './NotificationsPage'
import { UserProfile } from './UserProfile'
import { Analytics } from './Analytics'


const drawerWidth="20%"
const useStyles= makeStyles({
    drawer:{
      width: drawerWidth
     
    },

    drawerPaper:{
      width: drawerWidth,
      backgroundColor:"#343a40",
      color:"#fff",
      boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px;"
    },

    link:{
        textDecoration:"none",
        color:"#555"
    }


})


export const Layout = () => {

    let d="das-selected"
    let c="charts-selected"
    let cal="calendar-selected"
    const classes=useStyles()

    function menuItemSelected(id){
        // alert(id)
        
          let item=document.getElementById(id)

          item.classList.add('class','active')
    }

    return (
        <BrowserRouter>
        <div className="container-outside">
            <div className="subLeft">
             <Drawer
     className={classes.drawer}
     variant="permanent"
     anchor="left"
     classes={{paper: classes.drawerPaper}}>
       <h2>FSM</h2>
          
        <div className="menuWrapper">
        <Link className={classes.link} to={'/dashboard'}> 
            <div className="menuItem dashboard" id={"dashboard"} >
            
               <div className="menuLeft"><Dashboard/> </div> 
               <div className="menuRight">
                   Workstations
                    </div>
                    </div>
            </Link>
            
            <Link className={classes.link}  to={'/notifications'}>
            <div className="menuItem" id={"notifications"} >
            <div className="menuLeft"> <Notifications/> </div>
            <div className="menuRight">
                Notifications
                 </div>
            </div>
            </Link>

            <Link className={classes.link}  to={'/userprofile'}>
            <div className="menuItem" id={"user-profile"}>
            <div className="menuLeft"> <Person/> </div>
            <div className="menuRight"> 
            User Profile
             </div>
            </div>
            </Link>
            <Link className={classes.link}  to={'/analytics'}>
            <div className="menuItem" id={"analytics"}>
            <div className="menuLeft"> <Timeline/> </div>
            <div className="menuRight"> 
            Analytics
             </div>
            </div>
            </Link>
        </div>
       
         </Drawer>
         </div>

     

         <div className="subRight">
             <HeaderMain/>

            
             <Switch>
             <Route exact path='/dashboard' component={Workstations}/>
             <Route path='/notifications' component={NotificationsPage}/>
             <Route path='/userprofile' component={UserProfile}/>
             <Route path='/analytics' component={Analytics}/>
         </Switch>
          
         </div>
        </div>
        </BrowserRouter>
    )
}
