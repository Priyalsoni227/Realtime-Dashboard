import React from 'react'
import './css/WSSecondRow.css'
import db from '../firebase.js'
import {useState,useEffect} from "react"

export const Ws3ParaInfo = () => {


    let [ws3,setWs3]=useState({})
    useEffect(()=>{
        db.collection("Realtime").doc("WS 3").onSnapshot(doc=>{
            setWs3(doc.data())
 

        })
    },[])

    return (
        <div className="graph-parameters-info">

        <div className="performance">
          <div>
            Performance
              </div>
          <div className="value">{ws3.performance} </div>

        </div>
        <div className="availability">
          <div>
            Availability
              </div>
          <div className="value">{ws3.availability}</div>

        </div>

        <div className="quality">
          <div>
            Quality
            </div>
          <div className="value">{ws3.quality}</div>
        </div>
        <div className="oee">
          <div>
            OEE
            </div>
          <div className="value">{ws3.oee}</div>

        </div>

      </div>
    )
}
