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


export const WSSecondRow = ({ws1,ws2,ws3}) => {

  
    const BorderLinearProgress = withStyles((theme) => ({
        root: {
          height: 10,
          borderRadius: 5,
        },
        colorPrimary: {
        
          backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
        },
        bar: {
          borderRadius: 5,
          backgroundColor: '#2ec4b6',
         
        },
      }))(LinearProgress);



    return (
     
        <div className="wsSecondRow-container">
 

       <Switch>
       <Route exact path='/dashboard' render={(props)=>(<Workstation1 {...props} ws1Details={ws1} />)}/>
        <Route exact path='/dashboard/ws2' render={(props)=>(<Workstation2 {...props} ws2Details={ws2} />)}/>
        <Route exact path='/dashboard/ws3' render={(props)=>(<Workstation3 {...props} ws3Details={ws3} />)}/>
        
       </Switch>
      
               

            <div className="secondRow-right">
                <Card>
                <div className="pb-container">
                 
                <div className="pb-item">
                <div className="pb-inner">
                    <div className="process-name">Order Received</div>
                    <div className="sub-process">
                      <div>Power On</div>
                      <div className="percent">10%</div></div>
                <BorderLinearProgress variant="determinate" value={10} />
                </div>
               
                </div>
                <div className="pb-item">
                <div className="pb-inner">
                    <div className="process-name">Workstation 1</div>
                    <div className="sub-process"  style={{color:"#939393"}}>
                      <div>
                      Bottom cylinder clamped
                      </div>
                      <div className="percent">0%</div>
                      </div>
                <BorderLinearProgress variant="determinate" value={1} />
                </div>
               
                </div>
               
                <div className="pb-item">
         
                <div className="pb-inner">
                    <div className="process-name">Workstation 2</div>
                    <div className="sub-process"  style={{color:"#939393"}}>
                      <div>Motor engages with the pallet
                      </div>
                      <div className="percent">0%</div>
                      </div>
                <BorderLinearProgress variant="determinate" value={1} />
                </div>
                </div>
                <div className="pb-item">
         
                <div className="pb-inner">
                    <div className="process-name">Workstation3</div>
                    <div className="sub-process"  style={{color:"#939393"}}>
                      <div>Motor engages with the pallet
                      </div>
                      <div className="percent">0%</div>
                      </div>
                <BorderLinearProgress variant="determinate" value={1} />
                </div>
                </div>
                </div>
                </Card>
                <div className="order-details">
                    <p>Order #2666</p>
                    <p>Friday 2 July, 2021  16:30:32</p>
                  </div>
               </div>
        </div>
      
    )
}
