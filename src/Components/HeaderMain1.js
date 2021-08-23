import React from 'react'
import './css/HeaderMain.css'
import { TextField, Fab } from '@material-ui/core'
import { Search, Dashboard, Person, Notifications} from '@material-ui/icons'
import db from '../firebase'
import {useState,useEffect} from "react"
import { Link, Route, useHistory } from 'react-router-dom'

export const HeaderMain1 = () => {
    let history=useHistory()
   
    let [loggedInUser,setLoggedInUser]=useState("")

    useEffect(()=>{
        db.collection("User").doc(localStorage.getItem("currentUser")).onSnapshot(doc=>{
            setLoggedInUser(doc.data().username)
        })
    },[])
    return (
        <header id="header">
            <div className="headerLeft">
                <p>User Profile</p>
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
