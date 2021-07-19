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
import { WSProgressBars } from './WSProgressBars'


export const WSSecondRow = () => {





    return (
     
        <div className="wsSecondRow-container">
 

       <Switch>
       <Route exact path='/dashboard' component={Workstation1}/>
        <Route exact path='/dashboard/ws2' component={Workstation2}/>
        <Route exact path='/dashboard/ws3' component={Workstation3}/>
        
       </Switch>
      
          <WSProgressBars/>
        </div>
      
    )
}
