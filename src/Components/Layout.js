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
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
// import { DashboardPage } from './DashboardPage'
// import CalendarPage from './CalendarPage'
import { Workstations } from './Workstations'
import { NotificationsPage } from './NotificationsPage'
import { UserProfile } from './UserProfile'
import { Analytics } from './Analytics'
import './css/LogOutBtn.css'
import { useHistory } from 'react-router-dom'


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


function miClicked(id){
    // console.log(id)
    document.getElementById("mi1").classList.remove("active");
    document.getElementById("mi2").classList.remove("active");
    // document.getElementById("mi3").classList.remove("active");
    
    
    let mi=document.getElementById(id)
    
    mi.classList.add("active");
    
    }

export const Layout = () => {

    let history=useHistory()

    //  Workstation 1 progress bar 





    let d="das-selected"
    let c="charts-selected"
    let cal="calendar-selected"
    const classes=useStyles()

  

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
        <Link className={classes.link} to={'/dashboard'} onClick={()=>miClicked("mi1")}> 
            <div className="menuItem dashboard active" id="mi1" >
            
               <div className="menuLeft"><Dashboard/> </div> 
               <div className="menuRight">
                   Workstations
                    </div>
                    </div>
            </Link>
            
            {/* <Link className={classes.link}  to={'/notifications'}>
            <div className="menuItem" id={"notifications"} >
            <div className="menuLeft"> <Notifications/> </div>
            <div className="menuRight">
                Notifications
                 </div>
            </div>
            </Link> */}

            <Link className={classes.link}  to={'/userprofile'} onClick={()=>miClicked("mi2")}>
            <div className="menuItem" id="mi2">
            <div className="menuLeft"> <Person/> </div>
            <div className="menuRight"> 
            User Profile
             </div>
            </div>
            </Link>
            {/* <Link className={classes.link}  to={'/analytics'} onClick={()=>miClicked("mi3")}>
            <div className="menuItem" id="mi3">
            <div className="menuLeft"> <Timeline/> </div>
            <div className="menuRight"> 
            Analytics
             </div>
            </div>
            </Link> */}
            <div className="menuItem" id={"log-out"}>
            <div className="menuLeft"> <ExitToAppIcon/> </div>
            <div className="menuRight"  onClick={()=>{
                     history.push('/')
                     localStorage.removeItem("currentUser")
                 }}> 
            Log Out
             </div>
            </div>
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
