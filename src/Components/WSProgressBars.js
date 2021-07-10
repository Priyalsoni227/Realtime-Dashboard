
import React from 'react'
import './css/WSSecondRow.css'
import {Card, Button, LinearProgress} from '@material-ui/core'
import ChartistGraph from 'react-chartist'
import {withStyles}  from '@material-ui/core/styles'
import {Dashboard, Timeline, DateRange, Person} from '@material-ui/icons'
import {BrowserRouter,Route,Switch, Link} from "react-router-dom"
import { Workstation1 } from './Workstation1'
import { Workstation2 } from './Workstation2'
import { Workstation3 } from './Workstation3'
import { Workstations } from './Workstations'
import db from '../firebase.js'
import {useState,useEffect} from "react"

export const WSProgressBars = () => {
      // Order status from database
  let [orderTest,setOrderTest]=useState({})
  useEffect(()=>{
      db.collection("OrderTest").doc("CurrentOrder").onSnapshot(doc=>{
          setOrderTest(doc.data())
        

      })
  },[])


  // Order Status displayed
  let [orderCount,setOrderCount]=useState(0)
  let [orderPercent,setOrderPercent]=useState(-20)

  let [orderStatus,setOrderStatus]=useState("")
  useEffect(()=>
  {
    if(Object.entries(orderTest).length !== 0){
    
      
      if(orderCount<=5){
      setOrderStatus(orderTest.Process)
      
      setOrderPercent(orderPercent+20)
      setOrderCount(orderCount+1)
      }
      
    }
    
  },[orderTest])

  
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
        <div className="secondRow-right">
        <Card>
        <div className="pb-container">
         
        <div className="pb-item">
        <div className="pb-inner">
            <div className="process-name">Order Status</div>
            <div className="sub-process">
              <div>{orderStatus}</div>
              <div className="percent">{`${orderPercent}%`}</div></div>
        <BorderLinearProgress variant="determinate" value={orderPercent} />
        </div>
       
        </div>
        <div className="pb-item">
        <div className="pb-inner">
            <div className="process-name">Workstation 1</div>
            <div className="sub-process"  style={{color:"#939393"}}>
              <div>
             {/* {ws1.status} */}
              </div>
              <div className="percent">0%</div>
              </div>
        <BorderLinearProgress variant="determinate" value={1} />
        </div>
       
        </div>
       
        <div className="pb-item">
 
        <div className="pb-inner">
            <div className="process-name">Workstation 2</div>
            <div className="sub-process"  style={{color:"#939393"}}>
              <div>
                  {/* {ws2.status} */}
              </div>
              <div className="percent">0%</div>
              </div>
        <BorderLinearProgress variant="determinate" value={1} />
        </div>
        </div>
        <div className="pb-item">
 
        <div className="pb-inner">
            <div className="process-name">Workstation3</div>
            <div className="sub-process"  style={{color:"#939393"}}>
              <div>
                  {/* {ws3.status} */}
              </div>
              <div className="percent">0%</div>
              </div>
        <BorderLinearProgress variant="determinate" value={1} />
        </div>
        </div>
        </div>
        </Card>
        <div className="order-details">
            <p>Order #2666</p>
            <p>Friday 2 July, 2021  16:30:32</p>
          </div>
       </div>
    )
}
