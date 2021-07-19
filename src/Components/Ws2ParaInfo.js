import React from 'react'
import './css/WSSecondRow.css'
import db from '../firebase.js'
import {useState,useEffect} from "react"

export const Ws2ParaInfo = () => {


    let [ws2,setWs2]=useState({})
    useEffect(()=>{
        db.collection("Realtime").doc("WS 2").onSnapshot(doc=>{
            setWs2(doc.data())
 

        })
    },[])

    return (
        <div className="graph-parameters-info">

        <div className="performance">
          <div>
            Performance
              </div>
          <div className="value">{ws2.performance} </div>

        </div>
        <div className="availability">
          <div>
            Availability
              </div>
          <div className="value">{ws2.availability}</div>

        </div>

        <div className="quality">
          <div>
            Quality
            </div>
          <div className="value">{ws2.quality}</div>
        </div>
        <div className="oee">
          <div>
            OEE
            </div>
          <div className="value">{ws2.oee}</div>

        </div>

      </div>
    )
}
