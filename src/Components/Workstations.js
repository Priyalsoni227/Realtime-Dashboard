import React from 'react'
import { WSCards } from './WSCards'
import { WSSecondRow } from './WSSecondRow'
import {useState,useEffect} from "react"
import db from '../firebase.js'
import {BrowserRouter,Route,Switch, Link} from "react-router-dom"


let count=0

export const Workstations = () => {

    let [ws1Details,setWs1Details]=useState({})
    useEffect(()=>{
        db.collection("Realtime").doc("WS 1").onSnapshot(doc=>{
            setWs1Details(doc.data())
        })
    },[])

    let [ws2Details,setWs2Details]=useState({})
    useEffect(()=>{
        db.collection("Realtime").doc("WS 2").onSnapshot(doc=>{
            setWs2Details(doc.data())
           
        })
    },[])

    let [ws3Details,setWs3Details]=useState({})
    useEffect(()=>{
        db.collection("Realtime").doc("WS 3").onSnapshot(doc=>{
            setWs3Details(doc.data())
        })
    },[])
 

  
    return (
        <BrowserRouter>
        <div>
          
            <WSCards ws1={ws1Details} ws2={ws2Details} ws3={ws3Details}/>
            <WSSecondRow ws1={ws1Details} ws2={ws2Details} ws3={ws3Details}/>
        </div>
        </BrowserRouter>
    )
}
