
import React from 'react'
import './css/WSSecondRow.css'
import {Card, Button, LinearProgress} from '@material-ui/core'
import ChartistGraph from 'react-chartist'
import {withStyles}  from '@material-ui/core/styles'
import {Dashboard, Timeline, DateRange, Person} from '@material-ui/icons'
import {BrowserRouter,Route,Switch, Link} from "react-router-dom"


import db from '../firebase.js'
import {useState,useEffect} from "react"

export const Ws3PB = () => {



  let [ws3Status,setWs3Status]=useState("Waiting")
  useEffect(()=>{
      db.collection("OrderTest").doc("CurrentOrder").onSnapshot(doc=>{
        if(doc.data().Process=="Machine 1 Power On"){
          setWs3Status("Waiting")
        }
        if(doc.data().Process!="Machine 2 Started" && doc.data().Process!="Machine 2 Stopped" && doc.data().Process!="Pallet is at Exit" && doc.data().Process!="Machine 3 Started" && doc.data().Process!="Machine 3 Stopped" && doc.data().Process!="" )
        if(doc.data().Machine=="2" ||doc.data().Machine=="3" || doc.data().Machine=="4")
          setWs3Status(doc.data().Process)
       

      })
  },[])
  let [progress,setProgress]=useState("")
  useEffect(()=>{
      db.collection("ProgressStatus").doc("WS3").onSnapshot(doc=>{
        if(doc.data().Progress==100){
          setWs3Status("Completed")
          
        }
        
          setProgress(doc.data().Progress)
         
        

      })
  },[])
      // Order status from database
  // let [orderTest,setOrderTest]=useState({})
  // useEffect(()=>{
  //     db.collection("OrderTest").doc("CurrentOrder").onSnapshot(doc=>{
  //         setOrderTest(doc.data())
        

  //     })
  // },[])


  // let [ws3SPercent,setWs3Percent]=useState(localStorage.getItem("ws3Progress")!=null?parseInt(localStorage.getItem("ws3Progress")):0)
  //   let [startws2,setStartws2]=useState(0) 
    // let [ws3Status,setWs3Status]=useState(localStorage.getItem("ws3Status"))
  
  
  //   useEffect(()=>{

  //     if( orderTest.Process!="Machine 2 Stopped"){
        
  //       if(orderTest.Machine=="2" || orderTest.Machine=="3")
  //       if(orderTest.Process=="Machine 3 Stopped"){
  //         setWs3Status(orderTest.Process)
  //         if(localStorage.getItem("ws3Status")!=orderTest.Process){
  //           setWs3Percent(100)
  //         }
          
  //       }
  //       else
  //       {
  //         setWs3Status(orderTest.Process)
  //         if(localStorage.getItem("ws3Status")!=orderTest.Process){
  //           setWs3Percent(ws3SPercent+2)
  //         }
         
  
  //       }
  //     }
        
  //   },[orderTest.Process])

    let [ws3Details,setWs3Details]=useState({})
  useEffect(()=>{
      db.collection("Realtime").doc("WS 3").onSnapshot(doc=>{
          setWs3Details(doc.data())
      })
  },[])


  // Order Status displayed
  
  useEffect(()=>{
    if(ws3Details.status=="Completed"){
      // setWs3Percent(0)
      setWs3Status("Waiting")
    }
  },[ws3Details.status])

  // useEffect(()=>{
  //   localStorage.setItem("ws3Progress",ws3SPercent)
  // },[ws3SPercent])

  // useEffect(()=>{
  //   localStorage.setItem("ws3Progress",ws3SPercent)
  //   localStorage.setItem("ws3Status",ws3Status)

  // },[ws3SPercent,ws3Status])
    


  
    const BorderLinearProgress = withStyles((theme) => ({
        root: {
          height: 10,
          borderRadius: 5,
        },
        colorPrimary: {
        
          backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
        },
        bar: {
          borderRadius: 5,
          backgroundColor: '#2ec4b6',
         
        },
      }))(LinearProgress);
    return (
        <div className="pb-item">
 
        <div className="pb-inner">
            <div className="process-name">Workstation 3</div>
            <div className="sub-process"  style={{color:"#939393"}}>
              <div>
              {ws3Status}
              </div>
              <div className="percent">{progress}<span>%</span></div>
              </div>
        <BorderLinearProgress variant="determinate" value={progress}/>
        </div>
        </div>
    )
}
