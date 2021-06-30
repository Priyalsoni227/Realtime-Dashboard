import React from 'react'
import './css/WSSecondRow.css'
import {Card, Button, LinearProgress} from '@material-ui/core'
import ChartistGraph from 'react-chartist'
import {withStyles}  from '@material-ui/core/styles'


export const WSSecondRow = () => {


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

    var data1 = {
        labels: ['Avalibility','Performance','Quality','OEE'],
        series: [
          [68,80,64,76]
        ]
      };

      var options1 = {
        high: 100,
        low: 0,
        height:200,
        width:"100%",
        showPoint: true,
        axisX: {
          showGrid: false,
          
        }
      };

      var type1 = 'Line'

    return (
        <div className="wsSecondRow-container">
            <div className="secondRow-left">
                <div className="top">
                <Card>
                    <p className="ws-name">Raw Part Storage Loading and QC Workstation</p>
                    <div className="chartItem">
                    <ChartistGraph data={data1} options={options1} type={type1} />
                    </div>
                </Card>
                </div>
                <div className="bottom">
                    <div className="cardItem">
                    <Card>
                        
                        <p className="title">User</p>
                        <p className="value">1</p>
                    </Card>
                    </div>
                    <div className="cardItem">
                    <Card>
                    <p className="title">Inventory</p>
                        <p className="value">4</p>
                    </Card>
                    </div>
                    <div className="cardItem">
                    <Card>
                    <p className="title">Part No.</p>
                        <p className="value">1</p>
                    </Card>
                    </div>
                    <div className="cardItem">
                    <Card>
                    <p className="title">Pressure</p>
                        <p className="value">100%</p>
                    </Card>
                    </div>
                   
                </div>
                </div>

               

            <div className="secondRow-right">
                <Card>
                <div className="pb-container">
                <div className="pb-item">
                <div className="pb-inner">
                    <div className="process-name">Pallet reached Operational Sensor</div>
                    <div className="sub-process">Conveyor gets started</div>
                <BorderLinearProgress variant="determinate" value={50} />
                </div>
               
                </div>
                <div className="pb-item">
                <div className="pb-inner">
                    <div className="process-name">Valve body in pallet</div>
                    <div className="sub-process"  style={{color:"#939393"}}>Bottom cylinder clamped</div>
                <BorderLinearProgress variant="determinate" value={1} />
                </div>
               
                </div>
               
                <div className="pb-item">
         
                <div className="pb-inner">
                    <div className="process-name">Profile checking</div>
                    <div className="sub-process"  style={{color:"#939393"}}>Motor engages with the pallet</div>
                <BorderLinearProgress variant="determinate" value={1} />
                </div>
                </div>
                </div>
                </Card>
               </div>
        </div>
    )
}
