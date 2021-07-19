import React from 'react'
import './css/WSSecondRow.css'
import db from '../firebase.js'
import {useState,useEffect} from "react"

export const Ws1ParaInfo = () => {


 
 


    let [ws1,setWs1]=useState({})
    useEffect(()=>{

   


        db.collection("Realtime").doc("WS 1").onSnapshot(doc=>{
            setWs1(doc.data())
            // if(doc.data().oee>0 && doc.data().quality>0 && doc.data().performance>0 && doc.data().availability){
            //   localStorage.setItem("oeeTotal",parseInt(localStorage.getItem("oeeTotal"))+doc.data().oee)
            //   localStorage.setItem("oeeCount",parseInt(localStorage.getItem("oeeCount"))+1)
            // } 

        })
    },[])

  

    return (
        <div className="graph-parameters-info">

        <div className="performance">
          <div>
            Performance
              </div>
          <div className="value">{ws1.performance} </div>

        </div>
        <div className="availability">
          <div>
            Availability
              </div>
          <div className="value">{ws1.availability}</div>

        </div>

        <div className="quality">
          <div>
            Quality
            </div>
          <div className="value">{ws1.quality}</div>
        </div>
        <div className="oee">
          <div>
            OEE
            </div>
          <div className="value">{ws1.oee}</div>

        </div>

      </div>
    )
}
