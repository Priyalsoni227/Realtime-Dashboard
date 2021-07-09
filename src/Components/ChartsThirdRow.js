import React from 'react'
import './css/ChartsThirdRow.css'
import {Timeline} from '@material-ui/icons'
import ChartistGraph from 'react-chartist'
import {Card} from '@material-ui/core'

export const ChartsThirdRow = () => {
    var sum = function(a, b) { return a + b };

 


     var data1 = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        series: [
          [5, 4, 3, 7, 5, 10, 3, 4, 8, 10, 6, 8],
          [3, 2, 9, 5, 4, 6, 4, 6, 7, 8, 7, 4],
          [3, 2, 9, 5, 4, 6, 4, 6, 7, 8, 7, 4]
        ]
      };

    var data2 = {
        series: [5, 3, 4]
      };

        var options1 = {
       
        height:300,
        seriesBarDistance: 8
       
      };

      var options2 = {
       
        height:300,
        labelInterpolationFnc: function(value) {
            return Math.round(value / data2.series.reduce(sum) * 100) + '%';
          }
      
      };

      var type1 = 'Bar'
      var type2 = 'Pie'
    return (
        <div className="tcrContainer">
        <div className="tcrItem">
            <Card>
            <div className="trcTitle">Compare OEE</div>
            <div className="trcTitle1">W1<div></div> W2<div></div>W3<div></div></div>
            <div className="trcChartItem">
              
            <ChartistGraph data={data1} options={options1} type={type1} />
            </div>
            </Card>
            <div className="tcrIcon first">
               <Timeline/>
           </div>
            
        </div>
        <div className="tcrItem">
            <Card>
            <div className="trcTitle">Time taken by each workstation for an order</div>
            <div className="trcTitle1">W1<div></div> W2<div></div>W3<div></div></div>
            <div className="trcChartItem">
            
            <ChartistGraph data={data2} options={options2} type={type2} />
            </div>
            </Card>
            <div className="tcrIcon second">
                <Timeline/>
            </div>
            
        </div>
        
    </div>
    )
}
