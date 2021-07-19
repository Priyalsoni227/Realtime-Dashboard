
import React from 'react'
import './css/WSSecondRow.css'
import { Card, Button, LinearProgress } from '@material-ui/core'
import ChartistGraph from 'react-chartist'
import { withStyles } from '@material-ui/core/styles'
import { Dashboard, Timeline, DateRange, Person } from '@material-ui/icons'
import { BrowserRouter, Route, Switch, Link } from "react-router-dom"
import db from '../firebase.js'
import {useState,useEffect} from "react"

export const Workstation3 = () => {


  let [ws3Details,setWs3Details]=useState({})
  useEffect(()=>{
      db.collection("Realtime").doc("WS 1").onSnapshot(doc=>{
          setWs3Details(doc.data())


      })
  },[])

  var data1 = {
    labels: ['16:30:32'],
    series: [
      [ws3Details.oee],
      [ws3Details.quality],
      [ws3Details.performance],
      [ws3Details.availibility]
    ]
  };

  var options1 = {

    height: 250,
    width: 540,
    showPoint: false,

    lineSmooth: false,

    axisX: {

      showGrid: false,

    },

    axisY: {

      offset: 60,

    }
  };

  var type1 = 'Line'
  return (
    <div className="secondRow-left">
      <div className="top">
        <Card>



          <div className="chartItem">
            <p>Performance parameters3</p>
            <ChartistGraph data={data1} options={options1} type={type1} />

          </div>

        </Card>
        <div className="graph-parameters-info">

          <div className="performance">
            <div>
              Performance
                </div>
            <div className="value">{ws3Details.performance}</div>

          </div>
          <div className="availability">
            <div>
              Availability
                </div>
            <div className="value">{ws3Details.availability}</div>

          </div>

          <div className="quality">
            <div>
              Quality
              </div>
            <div className="value">{ws3Details.quality}</div>
          </div>
          <div className="oee">
            <div>
              OEE
              </div>
            <div className="value">{ws3Details.oee}</div>

          </div>

        </div>
      </div>
      <div className="bottom">
        <div className="cardItem">
          <Card>

            <p className="title" style={{ color: "#ef5350" }}>User</p>
            <p className="value">1</p>
          </Card>
        </div>
        <div className="cardItem">
          <Card>
            <p className="title" style={{ color: "#66bb6a" }}>Inventory</p>
            <p className="value">{ws3Details.inventory}</p>
          </Card>
        </div>
        <div className="cardItem">
          <Card>
            <p className="title" style={{ color: "#ffa726" }}>Part No.</p>
            <p className="value">1</p>
          </Card>
        </div>
        <div className="cardItem">
          <Card>
            <p className="title" style={{ color: " #26c6da" }}>Pressure</p>
            <p className="value">100%</p>
          </Card>
        </div>

      </div>
    </div>
  )
}