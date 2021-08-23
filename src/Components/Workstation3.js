import React from 'react'
import './css/WSSecondRow.css'
import { Card, Button, LinearProgress } from '@material-ui/core'
import {useState,useEffect} from "react"
// import ChartistGraph from 'react-chartist'
import { withStyles } from '@material-ui/core/styles'
import { Dashboard, Timeline, DateRange, Person } from '@material-ui/icons'
import { BrowserRouter, Route, Switch, Link } from "react-router-dom"
import {Line,Chart} from 'react-chartjs-2'
import 'chartjs-adapter-luxon/dist/chartjs-adapter-luxon.esm.js'
import 'chartjs-adapter-luxon/dist/chartjs-adapter-luxon.js'
import 'chartjs-adapter-luxon/dist/chartjs-adapter-luxon.min.js'
import StreamingPlugin from 'chartjs-plugin-streaming';
import { defaults } from 'react-chartjs-2'
import db from '../firebase.js'
import {Ws3UI} from './Ws3UI'
import {Ws3ParaInfo} from './Ws3ParaInfo'
// import {useState,useEffect} from "react"

// defaults.pause= true;

Chart.register(StreamingPlugin);
// defaults.options.legend.display=false

export const Workstation3 = () => {
 
  let performancePara=0
  let availabilityPara=0
  let qualityPara=0
  let oeePara=0
  let [pauseFlag,setPauseFlag]=useState(0)
  let [pausePara,setPausePara]=useState(false)

  useEffect(()=>{
    if(pauseFlag)
    setPausePara(true)
    else
    setPausePara(false)
  },[pauseFlag])

  


  let count=0
  const Para=()=>{
    return count++
  }

  const data = {
    labels: ['1', '2', '3', '4', '5', '6'],
    datasets: [
      {
        // performance
       label:"performance",
       lineTension: 0,
        data: [],
        fill: false,
        backgroundColor: '#26c6da',
        borderColor: '#26c6da61',
      },
      {
        // availability
        label:"availability",
        data: [],
        fill: false,
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgba(255, 99, 132, 0.2)',
      },
      {
        // quality
        label:"quality",
        data: [],
        fill: false,
        backgroundColor: '#66bb6a',
        borderColor: '#66bb6a7d',
      },
      {
        // oee
        label:"oee",
        data: [],
        fill: false,
        backgroundColor: '#ffa726',
        borderColor: '#ffa72682',
      }
    ],
  };
  
  const options={
    
   legend:{
     display:false
   },


    scales: {
      
      x: {
        type: 'realtime',
        realtime: {
          delay: 2000,
          pause:pausePara,
          // pause:false,
          onRefresh: chart => {

          

          db.collection("Realtime").doc("WS 3").get().then(doc=>{
            performancePara=doc.data().performance
            availabilityPara=doc.data().availability
            qualityPara=doc.data().quality
            oeePara=doc.data().oee
            if(doc.data().stnPressure)
               setPauseFlag(0)

            if(!doc.data().stnPressure)
               setPauseFlag(1)
          })
          chart.data.datasets[0].data.push({
            x: Date.now(),
            y: performancePara
          })
          chart.data.datasets[1].data.push({
            x: Date.now(),
            y: availabilityPara
          })
          chart.data.datasets[2].data.push({
            x: Date.now(),
            y: qualityPara
          })
          chart.data.datasets[3].data.push({
            x: Date.now(),
            y: oeePara
          })
          }

          
        },
        // pause:true
      }
    }
  }
  
  
 

 
  return (
    <div className="secondRow-left">
      <div className="top">
        <Card>



          <div className="chartItem">
            <p>Performance parameters</p>
           
            <Line data={data} options={options} />

          </div>

        </Card>
       <Ws3ParaInfo/>
      </div>
      <Ws3UI/>
    
    </div>
  )
}