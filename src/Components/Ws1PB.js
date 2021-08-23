
import React from 'react'
import './css/WSSecondRow.css'
import {Card, Button, LinearProgress} from '@material-ui/core'
import ChartistGraph from 'react-chartist'
import {withStyles}  from '@material-ui/core/styles'
import {Dashboard, Timeline, DateRange, Person} from '@material-ui/icons'
import {BrowserRouter,Route,Switch, Link} from "react-router-dom"

import db from '../firebase.js'
import {useState,useEffect} from "react"

export const Ws1PB = () => {
      // Order status from database
      let [progress,setProgress]=useState("")
  let [ws1Status,setWs1Status]=useState("Waiting")
  useEffect(()=>{
      db.collection("OrderTest").doc("CurrentOrder").onSnapshot(doc=>{
        if(doc.data().Process=="Machine 1 Power On"){
          setWs1Status("Waiting")
        }
        if(doc.data().Process!="Machine 2 Started" && doc.data().Process!="" && doc.data().Machine=="0"){
        //  if(doc.data().Process!="Waiting for pallet" && doc.data().Process!="Entry Sensor: Pallet Placed"
        //  && doc.data().Process!="Order Status: Ready to Accept order" && doc.data().Process!="Order Status: Recieved"  && doc.data().Process!="Machine 1 Stopped"){
          setWs1Status(doc.data().Process)
         }
        
         
      
        // }
        // else if(doc.data().Machine=="1" || doc.data().Machine=="2" || doc.data().Machine=="3" || doc.data().Machine=="4"){
        //   setWs1Status("Completed")
        // }
      })
  },[])
  // let [progress,setProgress]=useState("")
  useEffect(()=>{
      db.collection("ProgressStatus").doc("WS1").onSnapshot(doc=>{
       

        if(doc.data().Progress==100){
          setWs1Status("Completed")
        }
        
          setProgress(doc.data().Progress)
        
         
          
        

      })
  },[])

  


    //  let [ws1Details,setWs1Details]=useState({})
    // useEffect(()=>{
    //     db.collection("Realtime").doc("WS 1").onSnapshot(doc=>{
    //         setWs1Details(doc.data())
 

    //     })
    // },[])

    // let [ws2Details,setWs2Details]=useState({})
    // useEffect(()=>{
    //     db.collection("Realtime").doc("WS 2").onSnapshot(doc=>{
    //         setWs2Details(doc.data())
           
    //     })
    // },[])

    let [ws3Details,setWs3Details]=useState({})
    useEffect(()=>{
        db.collection("Realtime").doc("WS 3").onSnapshot(doc=>{
            setWs3Details(doc.data())
        })
    },[])


  // Order Status displayed
 


  // let [ws1SPercent,setWs1Percent]=useState(localStorage.getItem("ws1Progress")!=null?parseInt(localStorage.getItem("ws1Progress")):0)
  //  let [startws1,setStartws1]=useState(0) 
  //  let [ws1Status,setWs1Status]=useState(localStorage.getItem("ws1Status"))

  // useEffect(()=>{
      // if(orderTest.Process=="Order Status: Processing")
      // {
      //   setStartws1(1)
      //   setWs1Status(orderTest.Process)
      //   setWs1Percent(ws1SPercent+3)
      // }


      // if(orderTest.Process=="Machine 1 Power On"||
      // orderTest.Process=="Waiting for pallet"||
      // orderTest.Process=="Entry Sensor: Pallet Placed"||
      // orderTest.Process=="Order Status: Ready to Accept order"||
      
      // orderTest.Process=="Order Status: Recieved"){}
      
      // else{




      // if(orderTest.Process!="Machine 1 Power On"){
      
      // if(orderTest.Machine=="0" &&  orderTest.Process!="Machine 2 Started"){
      //     if(orderTest.Process=="Machine 1 Stopped")
      //     {
      //       setWs1Status(orderTest.Process)
      //       if(localStorage.getItem("ws1Status")!=orderTest.Process){
      //         setWs1Percent(100)
      //       }
        
      //     }
      //     else{
      //       setWs1Status(orderTest.Process)
      //       if(localStorage.getItem("ws1Status")!=orderTest.Process){
      //       setWs1Percent(ws1SPercent+2)
      //       }
      //     }
         
      // }
    // }

    // }
    
       
  // },[orderTest])

  // useEffect(()=>{
  //   localStorage.setItem("ws1Progress",ws1SPercent)
  //   localStorage.setItem("ws1Status",ws1Status)

  // },[ws1SPercent,ws1Status])


  useEffect(()=>{
    if(ws3Details.status=="Completed"){
      // setWs1Percent(0)
      setWs1Status("Waiting")
      // setStartws1(0)
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
            <div className="process-name">Workstation 1</div>
            <div className="sub-process"  style={{color:"#939393"}}>
              <div>
            {ws1Status}
            {/* {ws1Details.status} */}
              </div>
              {/* <div className="percent">{ws1SPercent>100?100:ws1SPercent}<span>%</span></div> */}
              <div className="percent">{progress}<span>%</span></div>
              </div>
        <BorderLinearProgress variant="determinate" value={progress} />
        </div>
       
        </div>
    )
}
