import React from 'react'
import './css/WSCards.css'
import {Card} from '@material-ui/core'
import { CircularProgressbar,buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export const WSCards = () => {
    const percentage=66
    
    const progressBarStyles=buildStyles({
        pathColor: `rgba(249,65,68, ${percentage / 100})`,
        strokeLinecap: 'butt',
        trailColor: '#d6d6d6',
        textColor: '#555'
    })
  
  
   
    return (
        <div className="wscards-container">
            <div className="wscards-item">
                <Card>
                    <div className="wscardInside">
                        <div className="wscard-left">
                            <div className="ws-number">Workstation1</div>
                            <div className="status">Status: <span>In Progress</span></div>
                            <div className="power">Power: <span>On</span></div>
                            <div className="pneumatics">Pneumatic: <span>On</span></div>
                        </div>
                        <div className="wscard-right">
                        <div className="progress-bar">
                    <CircularProgressbar strokeWidth="9" value={10} text={`${10}%`} styles={progressBarStyles}/>
                    </div>
                        </div>
                    </div>
                  
                </Card>
            </div>
            <div className="wscards-item">
                <Card>
                    <div className="wscardInside">
                        <div className="wscard-left">
                            <div className="ws-number">Workstation2</div>
                            <div className="status">Status: <span>Ready</span></div>
                            <div className="power">Power: <span>On</span></div>
                            <div className="pneumatics">Pneumatic: <span>On</span></div>
                        </div>
                        <div className="wscard-right">
                        <div className="progress-bar">
                    <CircularProgressbar strokeWidth="9" value={0} text={"0%"} styles={progressBarStyles}/>
                    </div>
                        </div>
                    </div>
                  
                </Card>
            </div>
            <div className="wscards-item">
                <Card>
                    <div className="wscardInside">
                        <div className="wscard-left">
                            <div className="ws-number">Workstation3</div>
                            <div className="status">Status: <span>Ready</span></div>
                            <div className="power">Power: <span>On</span></div>
                            <div className="pneumatics">Pneumatic: <span>On</span></div>
                        </div>
                        <div className="wscard-right">
                        <div className="progress-bar">
                    <CircularProgressbar strokeWidth="9" value={0} text={`0%`} styles={progressBarStyles}/>
                    </div>
                        </div>
                    </div>
                  
                </Card>
            </div>
           
            
        </div>
    )
}
