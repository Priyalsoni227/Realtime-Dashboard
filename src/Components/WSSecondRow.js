import React from 'react'
import './css/WSSecondRow.css'
import {Card} from '@material-ui/core'
import ChartistGraph from 'react-chartist'

export const WSSecondRow = () => {

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
                <Card>Progress bars</Card>
                </div>
        </div>
    )
}
