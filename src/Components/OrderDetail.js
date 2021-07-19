import React from 'react'
import db from '../firebase.js'
import {useState,useEffect} from "react"

export const OrderDetail = () => {

    
    const date = new Intl.DateTimeFormat('en-GB', { dateStyle: 'full', timeStyle: 'long' }).format(Date.now());

const d=new Date()

    return (
        <div className="order-details">
        {/* <p>Order #2666</p> */}
        <p>{date}</p>
        {/* <p>{d.getDay()+" "+d.getDate()+" "+d.getMonth()+" "+d.getFullYear()}</p> */}
        {/* <p>{Date.get()}</p> */}
      </div>
    )
}
