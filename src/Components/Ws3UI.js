import React from 'react'
import { Card, Button, LinearProgress } from '@material-ui/core'
import db from '../firebase.js'
import {useState,useEffect} from "react"


export const Ws3UI = () => {

  let [orderType,setOrderType]=useState([])
	
	useEffect(() => {
        db.collection("Order").orderBy("Time","desc").limit(1)
		.onSnapshot(snapshot=>
			setOrderType(snapshot.docs[0].data().Type)
			)
     
			
			
		
    },[])


    let [ws1,setWs1]=useState({})
    useEffect(()=>{
        db.collection("Realtime").doc("WS 1").onSnapshot(doc=>{
            setWs1(doc.data())
 

        })
    },[])


    let [ws3,setWs3]=useState({})
    useEffect(()=>{
        db.collection("Realtime").doc("WS 3").onSnapshot(doc=>{
            setWs3(doc.data())
 

        })
    },[])

    return (
              <div className="bottom">
        <div className="cardItem">
          <Card>

            <p className="title" style={{ color: "#ef5350" }}>User</p>
            <p className="value">{ws3.user}</p>
          </Card>
        </div>
        <div className="cardItem">
          <Card>
            <p className="title" style={{ color: "#66bb6a" }}>Inventory</p>
            <p className="value">{ws3.inventory}</p>
          </Card>
        </div>
        <div className="cardItem">
          <Card>
            <p className="title" style={{ color: "#ffa726" }}>Part No.</p>
            <p className="value">{ws1.powerStatus==true?orderType:"N/A"}</p>
          </Card>
        </div>
        <div className="cardItem">
          <Card>
            <p className="title" style={{ color: " #26c6da" }}>Pressure</p>
            <p className="value">{ws3.stnPressure==true? "100%":"0%"}</p>
          </Card>
        </div>

      </div>
    )
}
