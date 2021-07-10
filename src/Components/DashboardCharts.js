import React, { Component } from 'react'
import {Card} from '@material-ui/core'
import './css/DashboardCharts.css'
import ChartistGraph from 'react-chartist'



export const DashboardCharts = () => {

    
    var data1 = {
        labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
        series: [
          [10, 20,26, 30, 28, 32, 40]
        ]
      };
    var data2 = {
        labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
        series: [
          [10, 26, 30, 28, 32,30, 40]
        ]
      };
    var data3 = {
        labels: ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Sep', 'Oct', 'Nov','Dec'],
        series: [
          [400, 340, 600, 720,460, 500, 480, 420,500, 400,360]
        ]
      };
  
      var options1 = {
        high: 40,
        low: 0,
        showPoint: false,
        axisX: {
          showGrid: false,
          
        }
      };
      var options2 = {
        high: 50,
        low: 0,
       
      };
      var options3 = {
        high: 1000,
        low: 0,
        axisX: {
          showGrid: false,
       
        }
      };
  
      var type1 = 'Line'
      var type2 = 'Line'
      var type3 = 'Bar'
    return (
        <div className="dcContainer">
            <div className="chartItem"> 
            <Card>
              <div className="cardInfo">
            <p>Daily Orders</p>
            <p> 20% increase in today sales.</p>
            <hr></hr>
            <p>updated 4 minutes ago</p>
            </div>
            </Card>
            <div className="chart first">
            <ChartistGraph data={data1} options={options1} type={type1} />
            </div>
            </div>

            

            <div className="chartItem"> 
            <Card>
              <div className="cardInfo">
            <p>Monthly Orders</p>
            <p> 8% increase in today sales.</p>
            <hr></hr>
            <p>updated 4 minutes ago</p>
            </div>
            </Card>
            <div className="chart third">
            <ChartistGraph data={data3} options={options3} type={type3} />
            </div>
            </div>
            <div className="chartItem"> 
            <Card>
              <div className="cardInfo">
            <p>Net Yield</p>
            <p> 10% increase</p>
            <hr></hr>
            <p>updated 6 minutes ago</p>
            </div>
            </Card>
            <div className="chart second">
            <ChartistGraph data={data2} options={options2} type={type2} />
            </div>
            </div>

           
           
        </div>
    )
}
