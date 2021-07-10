import React from 'react'
import { WSCards } from './WSCards'
import { WSSecondRow } from './WSSecondRow'
import {useState,useEffect} from "react"


import {BrowserRouter,Route,Switch, Link} from "react-router-dom"



export const Workstations = () => {

   
   

 
    
    //  let [orderTest,setOrderTest]=useState({})
    // useEffect(()=>{
    //     db.collection("OrderTest").doc("CurrentOrder").onSnapshot(doc=>{
    //         setOrderTest(doc.data())
 

    //     })
    // },[])

  
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

    // let [ws3Details,setWs3Details]=useState({})
    // useEffect(()=>{
    //     db.collection("Realtime").doc("WS 3").onSnapshot(doc=>{
    //         setWs3Details(doc.data())
    //     })
    // },[])
 

  
    return (
        <BrowserRouter>
        <div>
          
            <WSCards />
            <WSSecondRow />
        </div>
        </BrowserRouter>
    )
}
