import React from 'react'
import './css/WSCards.css'
import { Card } from '@material-ui/core'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import {useState,useEffect} from "react"
import {BrowserRouter,Route,Switch, Link} from "react-router-dom"
import db from '../firebase.js'

export const WSCards = () => {
    const percentage = 66

    let [ot,setOt]=useState({})
    useEffect(()=>{
        db.collection("OrderTest").doc("CurrentOrder").onSnapshot(doc=>{
            setOt(doc.data())
 

        })
    },[])

  
     let [ws1,setWs1]=useState({})
    useEffect(()=>{
        db.collection("Realtime").doc("WS 1").onSnapshot(doc=>{
            setWs1(doc.data())
 

        })
    },[])

    let [ws2,setWs2]=useState({})
    useEffect(()=>{
        db.collection("Realtime").doc("WS 2").onSnapshot(doc=>{
            setWs2(doc.data())
           
        })
    },[])

    let [ws3,setWs3]=useState({})
    useEffect(()=>{
        db.collection("Realtime").doc("WS 3").onSnapshot(doc=>{
            setWs3(doc.data())
        })
    },[])



//   Workstation1 status 
 let [status1,setStatus1]=useState("")
 useEffect(()=>{
    if(ws1.powerStatus==true && ws1.stnPressure==true){
        if(ot.Machine=="0")
        setStatus1("In Process")
        else
        setStatus1("Ready")
    }
    else{
        setStatus1("Not Ready")
    }
 },[ws1.powerStatus,ws1.stnPressure,ot.Machine])


//  Workstation2 Status 
 let [status2,setStatus2]=useState("")
 useEffect(()=>{
    if(ws1.powerStatus==true &&ws2.stnPressure==true){
        if(ot.Machine=="1")
        setStatus2("In Process")
        else
        setStatus2("Ready")
    }
    else{
        setStatus2("Not Ready")
    }
 },[ws1.powerStatus,ws2.stnPressure,ot.Machine])


//  Workstation3 status 
 let [status3,setStatus3]=useState("")
 useEffect(()=>{
    if(ws1.powerStatus==true && ws3.stnPressure){
        if(ot.Machine=="2")
        setStatus3("In Process")
        else
        setStatus3("Ready")
    }
    else{
        setStatus3("Not Ready")
    }
 },[ws1.powerStatus,ws3.stnPressure,ot.Machine])
    

    const progressBarStyles = buildStyles({
        pathColor: `rgba(249,65,68, ${percentage / 100})`,
        strokeLinecap: 'butt',
        trailColor: '#d6d6d6',
        textColor: '#555'
    })



    return (
       
        <div className="wscards-container">

            {/* <button onClick={()=>{console.log(ws2.powerStatus)
            console.log(ws2.stnPressure)} }>Click</button> */}
            <div className="wscards-item">
           <Link  className="wsCardsLink" to={'/dashboard/'}>
          
                <Card>
                    <div className="wsCardOutside">
                        <div className="wscardInside">

                            <div className="wscard-left">
                                <div className="ws-number">Raw Part Storage<br />Loading and QC<br /> Work Station</div>
                                
                                <div className="status">Status: <span>
                                    {status1}
                                    </span></div>
                                
                            </div>
                            <div className="wscard-right">
                                <div className="progress-bar">
                                    <CircularProgressbar strokeWidth="9" value={10} text={`${10}%`} styles={progressBarStyles} />
                                </div>
                            </div>
                        </div>
                        <div className="bottom first">
                            <div className="power">Power: <span>{ws1.powerStatus==false?"Off":"On"}</span></div>
                            <div className="pneumatics">Pneumatic: <span>{ws1.stnPressure==false?"Off":"On"}</span></div>
                        </div>
                    </div>

                </Card>
            </Link>
            </div>

            <div className="wscards-item">
            <Link className="wsCardsLink" to={'/dashboard/ws2'}>
                <Card>
                    <div className="wsCardOutside">
                        <div className="wscardInside">
                            <div className="wscard-left">
                                <div className="ws-number">Asymmetric Part Storage<br /> QC and Inspection<br /> Work Station</div>
                               
                                <div className="status">Status: <span>{status2}</span></div>
                                
                            </div>
                            <div className="wscard-right">
                                <div className="progress-bar">
                                    <CircularProgressbar strokeWidth="9" value={0} text={"0%"} styles={progressBarStyles} />
                                </div>
                            </div>
                        </div>
                        <div className="bottom second">
                            <div className="power">Power: <span>{ws1.powerStatus==false?"Off":"On"}</span></div>
                            <div className="pneumatics">Pneumatic: <span>{ws2.stnPressure==false?"Off":"On"}</span></div>
                        </div>
                    </div>

                </Card>
            </Link>
            </div>

            
            <div className="wscards-item">
            <Link className="wsCardsLink" to={'/dashboard/ws3'}>
                <Card>
                    <div className="wsCardOutside">
                        <div className="wscardInside">
                            <div className="wscard-left">
                                <div className="ws-number">Prismatic Part Assly<br /> and Screwing<br /> Work Station</div>
                                <div className="status">Status: <span>{status3}</span></div>
                                
                            </div>
                            <div className="wscard-right">
                                <div className="progress-bar">
                                    <CircularProgressbar strokeWidth="9" value={0} text={`0%`} styles={progressBarStyles} />
                                </div>
                            </div>
                        </div>
                        <div className="bottom third">
                            <div className="power">Power: <span>{ws1.powerStatus==false?"Off":"On"}</span></div>
                            <div className="pneumatics">Pneumatic: <span>{ws3.stnPressure==false?"Off":"On"}</span></div>
                        </div>
                    </div>

                </Card>
            </Link>
            </div>


        </div>
     
    )
}
