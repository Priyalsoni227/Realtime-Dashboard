import React, { createRef } from 'react';
import { Grid, Typography, Card, CardHeader, CardContent, Table, TableRow, TableBody, TableCell, CardActionArea, Button } from '@material-ui/core';
import { Assignment } from '@material-ui/icons';
// import BarGraph from './barchart';
import './css/OrderHistory.css'
import { PDFExport, savePDF } from '@progress/kendo-react-pdf';
// import './pdf.css';
import './css/ReportButton.css'
import { useState } from 'react';
import { useEffect } from 'react';
import AnalyticsGraph from './AnalyticsGraph'
import { OrderHistory } from './OrderHistory'
import db from '../firebase';
// import { sendAverage } from './average';
const firebase = require('firebase');
require('firebase/firestore')
require('firebase/auth')


const getDate = () => {
    var today = new Date();

    return (today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear())
}



export const Analytics=()=> {


    const ref = React.createRef();

    const [OEE, setOEE] = useState(0);
    const [Avail, setAvail] = useState(0);
    const [Qual, setQual] = useState(0);
    const [Per, setPer] = useState(0);


    useEffect(() => {
        db.collection('Analytics').doc('Parameters').onSnapshot((snap) => {
            setOEE(snap.data().oee);
            setAvail(snap.data().availability);
            setQual(snap.data().quality);
            setPer(snap.data().performance);
        })
    },[])

    // useEffect(()=>{
    //     db.collection("ProgressStatus").doc("WS3").onSnapshot(doc=>{
    //       if(doc.data().Progress==100){
    //        console.log("Sending from analytics")
    //         sendAverage()
    //       }
       
        
    //     })
    // },[])



    return (
<>
        <Grid style={{height: 83+'vh',margin:40+"px", overflow: 'hidden'}}>
            <Grid>
                <Typography style={{}}>
                    <Grid style={{display: 'inline-block', width: 40+'%'}}>
                    <h1 style={{ display: 'inline-block' }}>Report &nbsp;</h1>
                    <p style={{ display: 'inline-block', fontSize: 13, marginLeft: 1 + '%' }} variant='body2'>as on {getDate()}</p>
                    </Grid>
                    {/* <Button   style={{ marginTop: 1 + '%', float: ' right' }} onClick={() => {
                        if (ref.current) {
                            console.log(ref.current.style);
                            ref.current.save();
                        }
                    }}>
                        <Typography >
                            <h6>Generate Report <Assignment></Assignment></h6>
                        </Typography>
                    </Button> */}
                    <div className="report" style={{ marginTop: 1 + '%', float: ' right' }} onClick={() => {
                        if (ref.current) {
                            console.log(ref.current.style);
                            ref.current.save();
                        }
                    }}>
                       
                          Generate Report
                           {/* <Assignment></Assignment> */}
                        
                    </div>
                </Typography>
            </Grid>
            <PDFExport ref={ref} >
                <Grid style={{ display: 'flex', alignItems: 'stretch',justifyContent: 'space-between', marginTop: 2 + '%', height: 60 + 'vh' }} >
                    <Card style={{  width: 48+'%' }}>
                        <CardHeader
                            style={{ paddingBottom: 0 }}
                            title={
                                <div>
                                    <h3>Parameter Analytics</h3>
                                    <hr />
                                </div>
                            }
                        />
                        <CardContent style={{ padding: 2 + '%', textAlign: 'center', paddingTop: 0, height: 40 + 'vh' }}>
                            <Table style={{ width: 80 + '%', margin: 'auto' }}>
                                <TableBody>
                                    <TableRow>
                                        <TableCell>
                                            Average OEE
                                        </TableCell>
                                        <TableCell>
                                            {OEE}
                                        </TableCell>
                                    </TableRow>

                                    <TableRow>
                                        <TableCell>
                                            Average Performance
                                        </TableCell>
                                        <TableCell>
                                            {Per}
                                        </TableCell>
                                    </TableRow>

                                    <TableRow>
                                        <TableCell>
                                            Average Quality
                                        </TableCell>
                                        <TableCell>
                                            {Qual}
                                        </TableCell>
                                    </TableRow>

                                    <TableRow>
                                        <TableCell>
                                            Average Availiblity
                                        </TableCell>
                                        <TableCell>
                                            {Avail}
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>
                    <Card style={{ width: 48+'%' }}>
                        <CardHeader
                            title={
                                <div>
                                    <h3>Part Details</h3>
                                    <hr></hr>
                                </div>
                            }
                        />
                        <CardContent style={{ padding: 5 + '%', paddingTop: 0 }}>
                            <AnalyticsGraph/>
                        </CardContent>
                    </Card>

                </Grid>
                
            </PDFExport>

        </Grid>

        {/* <OrderHistory/> */}
</>
    )
}

/*

<Grid style={{ width: 80 + '%', display: 'flex', marginTop: 5 + '%', justifyContent: 'center', margin: 'auto' }}>
                    <ProcessLog></ProcessLog>
                </Grid>

<Grid style={{flex: '1'}}>
                <Card>
                    <CardHeader
                        style={{paddingBottom: 0}}
                        title = {
                            <div>
                                <h3>Parameter Analytics</h3>
                                <hr />
                            </div>
                        }
                    />
                    <CardContent style={{padding: 2+'%', textAlign: 'center',paddingTop: 0, height: 40+'vh'}}>
                        <Table style={{width: 80+'%',margin: 'auto'}}>
                            <TableBody>
                                <TableRow>
                                    <TableCell>
                                       Average OEE
                                    </TableCell>
                                    <TableCell>
                                        {avgOEE}
                                    </TableCell>
                                </TableRow>

                                <TableRow>
                                    <TableCell>
                                    Average Performance
                                    </TableCell>
                                    <TableCell>
                                        {avgPerf}
                                    </TableCell>
                                </TableRow>

                                <TableRow>
                                    <TableCell>
                                    Average Quality
                                    </TableCell>
                                    <TableCell>
                                        {avgQual}
                                    </TableCell>
                                </TableRow>

                                <TableRow>
                                    <TableCell>
                                    Average Availiblity
                                    </TableCell>
                                    <TableCell>
                                        {avgAvail}
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
            </Grid>
            <Grid style={{flex: 1}}>
                <Card >
                    <CardHeader
                        title={
                            <div>
                                <h3>Part Details</h3>
                                <hr></hr>
                            </div>
                        }
                    />
                    <CardContent style={{padding: 5+'%', paddingTop: 0}}>
                        <BarGraph></BarGraph>
                    </CardContent>
                </Card>
            </Grid>
            <Grid style={{flex: 1,maxWidth: 30+'%'}}>
                    <Card>
                        <CardHeader
                            title= {
                                <div>
                                    <h3 style={{display: 'inline-block'}}>Time Analysis</h3>
                                    <p style={{display: 'inline-block', marginLeft: 2+'%'}}variant = 'body2'>( in minutes )</p>
                                    <hr />
                                </div>
                            }
                        />
                        <CardContent>
                            <DonutGraph></DonutGraph>
                        </CardContent>
                    </Card>
            </Grid>




            <Card style={{ flex: 1 }}>
                        <CardHeader
                            title={
                                <div>
                                    <h3 style={{ display: 'inline-block' }}>Time Analysis</h3>
                                    <p style={{ display: 'inline-block', marginLeft: 2 + '%' }} variant='body2'>( in minutes )</p>
                                    <hr />
                                </div>
                            }
                        />
                        <CardContent>
                            <DonutGraph></DonutGraph>
                        </CardContent>
                    </Card>*/



// import React from 'react'
// import { DashboardCharts } from './DashboardCharts'
// import './css/DashboardCharts.css'
// import { ChartsSecondRow } from './ChartsSecondRow'
// import { ChartsThirdRow } from './ChartsThirdRow'
// import {ReportButton} from './ReportButton'
// import { OrderHistory } from './OrderHistory'
// import './css/OrderHistory.css'
// import { PDFExport, savePDF } from "@progress/kendo-react-pdf";
// import './css/ReportButton.css'
// import { Card } from '@material-ui/core'
// import db from '../firebase.js'
// import { Bar } from 'react-chartjs-2';

// export const Analytics = () => {

//   const data = {
//     labels: ['5/2', '3/2'],
//     datasets: [
//       {
//         label: '# of Red Votes',
//         data: [12, 19],
//         backgroundColor: 'rgb(255, 99, 132)',
//       }
      
//     ],
//   };
  
//   const options = {
//     scales: {
//       yAxes: [
//         {
//           stacked: true,
//           ticks: {
//             beginAtZero: true,
//           },
//         },
//       ],
//       xAxes: [
//         {
//           stacked: true,
//         },
//       ],
//     },
//   };
  


//     const pdfExportComponent = React.useRef(null);

//     const exportPDFWithComponent = () => {
//         if (pdfExportComponent.current) {
//           pdfExportComponent.current.save();
//         }
//       };


//       function addAnalytics(){
//         db.collection("Analytics").doc("Parameters").set({
//             availability:80,
//             oee:80,
//             quality:80,
//             performance:80
//         })
//         .then(() => {
//             console.log("Document successfully written!");
//         })
//     }
//     return (
//         <div>
//           <button onClick={addAnalytics}>Click</button>
//            {/* <ReportButton/> */}
//            <div className="buttonContainer k-button" onClick={exportPDFWithComponent}>
//             <div className="title">Overall Analysis</div>
//         <div className="report">
//             Create Report
//         </div>
//         </div>
//             {/* <DashboardCharts/> */}
//             {/* <button className="k-button" onClick={exportPDFWithComponent}>
//           Export to PDF with component
//         </button> */}
//             <PDFExport ref={pdfExportComponent} paperSize="A4">
//             <div className="overall-analysis">
//               <Card>
//               <div className="overall-analysis-inner">
//               <div className="left">
//                 <div className="parameter-detail">
//                   <div>Average OEE</div>
//                   <div>80</div>
//                 </div>
//                 <div className="parameter-detail">
//                   <div>Average Performance</div>
//                   <div>80</div>
//                 </div>
//                 <div className="parameter-detail">
//                   <div>Average Quality</div>
//                   <div>80</div>
//                 </div>
//                 <div className="parameter-detail">
//                   <div>Average availability</div>
//                   <div>80</div>
//                 </div>
               
                
//               </div>
//               <div className="right">
//                 <div className="graph-item">
//               <Bar data={data} options={options} />
//               </div>
//               </div>
//               </div>
//               </Card>
//             </div>
//       </PDFExport>
           
//             {/* <ChartsSecondRow/> */}
            
//             {/* <ChartsThirdRow/> */}

//            <OrderHistory/>
//         </div>
//     )
// }
