import React from 'react'
import './css/WSCards.css'
import { Card } from '@material-ui/core'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import {useState,useEffect} from "react"
import {BrowserRouter,Route,Switch, Link} from "react-router-dom"

export const WSCards = ({ws1,ws2,ws3}) => {
    const percentage = 66

    
    

    const progressBarStyles = buildStyles({
        pathColor: `rgba(249,65,68, ${percentage / 100})`,
        strokeLinecap: 'butt',
        trailColor: '#d6d6d6',
        textColor: '#555'
    })



    return (
       
        <div className="wscards-container">

            
            <div className="wscards-item">
           <Link  className="wsCardsLink" to={'/dashboard/'}>
          
                <Card>
                    <div className="wsCardOutside">
                        <div className="wscardInside">

                            <div className="wscard-left">
                                <div className="ws-number">Raw Part Storage<br />Loading and QC<br /> Work Station</div>
                                
                                <div className="status">Status: <span>{ws1.status}</span></div>
                                
                            </div>
                            <div className="wscard-right">
                                <div className="progress-bar">
                                    <CircularProgressbar strokeWidth="9" value={10} text={`${10}%`} styles={progressBarStyles} />
                                </div>
                            </div>
                        </div>
                        <div className="bottom first">
                            <div className="power">Power: <span>{ws1.powerStatus==false?"Off":"On"}</span></div>
                            <div className="pneumatics">Pneumatic: <span>{ws1.stnPressure==false?"Off":"On"}</span></div>
                        </div>
                    </div>

                </Card>
            </Link>
            </div>

            <div className="wscards-item">
            <Link className="wsCardsLink" to={'/dashboard/ws2'}>
                <Card>
                    <div className="wsCardOutside">
                        <div className="wscardInside">
                            <div className="wscard-left">
                                <div className="ws-number">Asymmetric Part Storage<br /> QC and Inspection<br /> Work Station</div>
                               
                                <div className="status">Status: <span>{ws2.status}</span></div>
                                
                            </div>
                            <div className="wscard-right">
                                <div className="progress-bar">
                                    <CircularProgressbar strokeWidth="9" value={0} text={"0%"} styles={progressBarStyles} />
                                </div>
                            </div>
                        </div>
                        <div className="bottom second">
                            <div className="power">Power: <span>{ws1.powerStatus==false?"Off":"On"}</span></div>
                            <div className="pneumatics">Pneumatic: <span>{ws2.stnPressure==false?"Off":"On"}</span></div>
                        </div>
                    </div>

                </Card>
            </Link>
            </div>

            
            <div className="wscards-item">
            <Link className="wsCardsLink" to={'/dashboard/ws3'}>
                <Card>
                    <div className="wsCardOutside">
                        <div className="wscardInside">
                            <div className="wscard-left">
                                <div className="ws-number">Prismatic Part Assly<br /> and Screwing<br /> Work Station</div>
                                <div className="status">Status: <span>{ws3.status}</span></div>
                                
                            </div>
                            <div className="wscard-right">
                                <div className="progress-bar">
                                    <CircularProgressbar strokeWidth="9" value={0} text={`0%`} styles={progressBarStyles} />
                                </div>
                            </div>
                        </div>
                        <div className="bottom third">
                            <div className="power">Power: <span>{ws1.powerStatus==false?"Off":"On"}</span></div>
                            <div className="pneumatics">Pneumatic: <span>{ws3.stnPressure==false?"Off":"On"}</span></div>
                        </div>
                    </div>

                </Card>
            </Link>
            </div>


        </div>
     
    )
}
