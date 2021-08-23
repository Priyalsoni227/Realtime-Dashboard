
import React from 'react'
import './css/WSSecondRow.css'
import {Card, Button, LinearProgress} from '@material-ui/core'
import ChartistGraph from 'react-chartist'
import {withStyles}  from '@material-ui/core/styles'
import {Dashboard, Timeline, DateRange, Person} from '@material-ui/icons'
import {BrowserRouter,Route,Switch, Link} from "react-router-dom"

import db from '../firebase.js'
import {useState,useEffect} from "react"

export const OrderPB = () => {
      // Order status from database

      // let [ws1Status,setWs1Status]=useState("")
      // useEffect(()=>{
      //     db.collection("OrderTest").doc("CurrentOrder").onSnapshot(doc=>{
      //       if(doc.data().Process!="Machine 2 Started" && doc.data().Machine=="0")
      //         setWs1Status(doc.data().Process)
            
    
      //     })
      // },[])
      let [orderProgress,setOrderProgress]=useState("")
      useEffect(()=>{
          db.collection("ProgressStatus").doc("Overall").onSnapshot(doc=>{
    
            
              setOrderProgress(doc.data().Progress)
              if(parseInt(doc.data().Progress)>0 && parseInt(doc.data().Progress)<100){
                setOrderStatus("Order Processing")
              }
              if(doc.data().Progress=="100"){
                setOrderStatus("Completed")
              }
    
          })
      },[])


  let [orderTest,setOrderTest]=useState({})
  useEffect(()=>{
      db.collection("OrderTest").doc("CurrentOrder").onSnapshot(doc=>{
          setOrderTest(doc.data())
        

      })
  },[])

  let [ws1,setWs1]=useState({})
  useEffect(()=>{
      db.collection("Realtime").doc("WS 1").onSnapshot(doc=>{
          setWs1(doc.data())


      })
  },[])

  let [ws3Details,setWs3Details]=useState({})
  useEffect(()=>{
      db.collection("Realtime").doc("WS 3").onSnapshot(doc=>{
          setWs3Details(doc.data())
      })
  },[])




  // Order Status displayed
  let [orderCount,setOrderCount]=useState(0)
  let [orderPercent,setOrderPercent]=useState(0)
  let [orderStatus,setOrderStatus]=useState("")
  let [percentFlag,setpercentFlag]=useState(0)
 
  

// useEffect(()=>{
//   if(orderTest.Process=="Machine 1 Power On"||
//   orderTest.Process=="Waiting for pallet"||
//   orderTest.Process=="Entry Sensor: Pallet Placed"||
//   orderTest.Process=="Order Status: Ready to Accept order"||
  
//   orderTest.Process=="Order Status: Recieved")
//   {
//       setOrderStatus(orderTest.Process)
//       setOrderPercent(orderPercent+20)
      
//   }

// },[orderTest.Process])
useEffect(()=>{

  
  // if(ws1.powerStatus==true && orderTest.Process!=""){

    if(orderTest.Process=="Machine 1 Power On" || orderTest.Process=="Waiting for pallet" || orderTest.Process=="Order Status: Ready to Accept Order" || orderTest.Process=="Entry Sensor: Pallet Placed"){
      setOrderStatus("Waiting for order")
    }
    if(orderTest.Process=="Order Status: Recieved"){
      setOrderStatus("Order received")
    }
    if(orderTest.Process=="Order Status: Processing"){
      setOrderStatus("Order Processing")
    }
    // if(!(parseInt(Progress)>0)){
        
    // }
    
    

    // if(orderTest.Process=="Machine 3 Stopped"){
    //   setOrderStatus("Complete")
    //   setOrderPercent(100)
    // }
    // else{

    //   if(orderTest.Process=="Order Status: Ready to Accept order"){
    //     setOrderStatus("Ready to accept order")
    //     if(localStorage.getItem("orderStatus")!="Ready to accept order"){
    //     setOrderPercent(orderPercent+10)
    //     }
    //   }
    //   else if(orderTest.Process=="Order Status: Recieved"){
    //     setOrderStatus("Order Received")
    //     if(localStorage.getItem("orderStatus")!="Order Received"){
    //     setOrderPercent(orderPercent+10)
    //     }
    //   }
    //   else if(orderTest.Process=="Order Status: Processing"){
    //     setOrderStatus("In progress")
    //     if(localStorage.getItem("orderStatus")!="In progress"){
    //     setOrderPercent(orderPercent+10)
    //     }
    //   }
    //   else{
    //     if(localStorage.getItem("orderStatus")!=orderTest.Process){
    //     setOrderPercent(orderPercent+0.5)
    //     }
    //   }
   
      // setpercentFlag(1)
    // }
    
  // }


},[orderTest.Process])

useEffect(()=>{
  if(ws3Details.status=="Completed"){
    // setOrderPercent(0)
    setOrderStatus("")
    // setStartws1(0)
  }
},[ws3Details.status])


// useEffect(()=>{
//   localStorage.setItem("orderProgress",orderPercent)
// },[orderPercent])

// useEffect(()=>{
//   localStorage.setItem("orderProgress",orderPercent)
//   localStorage.setItem("orderStatus",orderStatus)

// },[orderPercent,orderStatus])


// useEffect(()=>{
//   if(ws3Details.status=="Completed"){
//     setOrderPercent(0)
//     setOrderStatus("Waiting")
//   }
// },[ws3Details.status])
  
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
          {/* <div className="order-status"> */}
            <div className="process-name">Order Status</div>
            {/* <div className="percent">{`${orderProgress}%`}</div>  */}
            {/* </div> */}
           
            <div className="sub-process" style={{color:"#939393"}}>
              <div>{orderStatus}</div>
              <div className="percent">{`${orderProgress}%`}</div></div>
        <BorderLinearProgress variant="determinate" value={orderProgress} />
        </div>
       
        </div>
    )
}
