
import React from 'react'
import './css/WSSecondRow.css'
import {Card, Button, LinearProgress} from '@material-ui/core'
import ChartistGraph from 'react-chartist'
import {withStyles}  from '@material-ui/core/styles'
import {Dashboard, Timeline, DateRange, Person} from '@material-ui/icons'
import {BrowserRouter,Route,Switch, Link} from "react-router-dom"

import db from '../firebase.js'
import {useState,useEffect} from "react"

export const Ws2PB = () => {
      // Order status from database

      let [ws2Status,setWs2Status]=useState("Waiting")
      useEffect(()=>{
          db.collection("OrderTest").doc("CurrentOrder").onSnapshot(doc=>{
            if(doc.data().Process=="Machine 1 Power On"){
              setWs2Status("Waiting")
            }
            // if(doc.data().Process!="Machine 2 Started")
            if(doc.data().Machine=="1" && doc.data().Process!="")
              setWs2Status(doc.data().Process)
            
    
          })
      },[])
      let [progress,setProgress]=useState("")
      useEffect(()=>{
          db.collection("ProgressStatus").doc("WS2").onSnapshot(doc=>{
            if(doc.data().Progress==100){
              setWs2Status("Completed")
            }
            
              setProgress(doc.data().Progress)
            
    
          })
      },[])



  // let [orderTest,setOrderTest]=useState({})
  // useEffect(()=>{
  //     db.collection("OrderTest").doc("CurrentOrder").onSnapshot(doc=>{
  //         setOrderTest(doc.data())
        

  //     })
  // },[])

  let [ws3Details,setWs3Details]=useState({})
  useEffect(()=>{
      db.collection("Realtime").doc("WS 3").onSnapshot(doc=>{
          setWs3Details(doc.data())
      })
  },[])




  // Order Status displayed


 
  // let [ws2SPercent,setWs2Percent]=useState(localStorage.getItem("ws2Progress")!=null?parseInt(localStorage.getItem("ws2Progress")):0)
//   let [startws2,setStartws2]=useState(0) 
  // let [ws2Status,setWs2Status]=useState(localStorage.getItem("ws2Status"))


  // useEffect(()=>{
  //     if(orderTest.Machine=="1")
  //     {
        
  //           setWs2Status(orderTest.Process)
  //           if(localStorage.getItem("ws2Status")!=orderTest.Process)
  //           { setWs2Percent(ws2SPercent+5)}
           
          
        

  //     }

  //     if(orderTest.Process=="Machine 2 Started"){
  //       setWs2Status(orderTest.Process)
  //       if(localStorage.getItem("ws2Status")!=orderTest.Process)
  //       {setWs2Percent(ws2SPercent+5)}
        
  //     }

  //     if(orderTest.Process=="Machine 2 Stopped"){
  //       setWs2Status(orderTest.Process)
  //           // setWs2Percent(ws2SPercent+10)
  //           if(localStorage.getItem("ws2Status")!=orderTest.Process)
  //           { setWs2Percent(100)}
           
  //     }
      
  // },[orderTest.Process])


  // useEffect(()=>{
  //   localStorage.setItem("ws2Progress",ws2SPercent)
  // },[ws2SPercent])

  // useEffect(()=>{
  //   localStorage.setItem("ws2Progress",ws2SPercent)
  //   localStorage.setItem("ws2Status",ws2Status)

  // },[ws2SPercent,ws2Status])

  
  useEffect(()=>{
    if(ws3Details.status=="Completed"){
      // setWs2Percent(0)
      setWs2Status("Waiting")
    }
  },[ws3Details.status])

  
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
            <div className="process-name">Workstation 2</div>
            <div className="sub-process"  style={{color:"#939393"}}>
              <div>
              {ws2Status}
              </div>
              <div className="percent">{progress}<span>%</span> </div>
              </div>
        <BorderLinearProgress variant="determinate" value={progress} />
        </div>
        </div>
    )
}
