import React from 'react'
import './css/HeaderMain.css'
import { TextField, Fab } from '@material-ui/core'
import { Search, Dashboard, Person, Notifications} from '@material-ui/icons'
import db from '../firebase'
import {useState,useEffect} from "react"
import { Link, Route, useHistory } from 'react-router-dom'


// function currentPage(){
//     if(window.location.href=="http://localhost:3000/dashboard")
//     return "Workstations"
//     if(window.location.href=="http://localhost:3000/userprofile")
//     return "User Profile"
//     if(window.location.href=="http://localhost:3000/analytics")
//     return "Analytics"
// }

export const HeaderMain = () => {
    let history=useHistory()

    // let[currentPage, setCurrentPage]=useState("")

    // useEffect(()=>{
    //     function listenToPopstate(){
    //         if(window.location.href=="http://localhost:3000/dashboard")
    //         setCurrentPage("Workstations")
    //         if(window.location.href=="http://localhost:3000/userprofile")
    //         setCurrentPage("User Profile")
    //         if(window.location.href=="http://localhost:3000/analytics")
    //         setCurrentPage("Analytics")
    //     }
    //     window.addEventListener("popstate", listenToPopstate);

        
    // },[])
   
    let [loggedInUser,setLoggedInUser]=useState("")

    useEffect(()=>{
        db.collection("User").doc(localStorage.getItem("currentUser")).onSnapshot(doc=>{
            setLoggedInUser(doc.data().username)
        })
    },[])
    return (
        <header id="header">
            <div className="headerLeft">
                <p>Workstations</p>
            </div>
            <div className="headerRight">
                {/* <div className="searchBar">
                    <form noValidate autoComplete="off">
                        <TextField id="standard-basic" />
                        <div className="fab">
                        <Fab color="#ffffff"  size="small" aria-label="add">
                           
                            <Search color="#fff"/>
                           
                        </Fab>
                        </div>
                    </form>
                </div> */}
                
                <div className="iconGroup"  onClick={()=>
                     history.push('/UserProfile')
                  
                 }>
                    {/* <div className="iconItem"> <Dashboard/></div> */}
                    <div className="iconItem"><Person/></div>
                    <div className="iconItem">{`Welcome, ${loggedInUser}`}</div>
                   
                 
                    
                </div>
            </div>
        </header>
    )
}
