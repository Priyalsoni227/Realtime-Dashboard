
import React from 'react'
import './css/WSSecondRow.css'
import {Card, Button, LinearProgress} from '@material-ui/core'
import ChartistGraph from 'react-chartist'
import {withStyles}  from '@material-ui/core/styles'
import {Dashboard, Timeline, DateRange, Person} from '@material-ui/icons'
import {BrowserRouter,Route,Switch, Link} from "react-router-dom"

import db from '../firebase.js'
import {useState,useEffect} from "react"
import { OrderPB } from './OrderPB'
import {Ws1PB} from './Ws1PB'
import {Ws2PB} from './Ws2PB'
import {Ws3PB} from './Ws3PB'
import { OrderDetail } from './OrderDetail'

export const WSProgressBars = () => {
  
    return (
        <div className="secondRow-right">
        <Card>
        <div className="pb-container">
         
       <OrderPB/>
        <Ws1PB/>
       
       <Ws2PB/>
       <Ws3PB/>
        </div>
        </Card>
       
          <OrderDetail/>
       </div>
    )
}
