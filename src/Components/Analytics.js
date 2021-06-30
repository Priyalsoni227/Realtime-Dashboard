import React from 'react'
import { DashboardCharts } from './DashboardCharts'
import './css/DashboardCharts.css'
import { ChartsSecondRow } from './ChartsSecondRow'
import { ChartsThirdRow } from './ChartsThirdRow'
import {ReportButton} from './ReportButton'

export const Analytics = () => {
    return (
        <div>
           <ReportButton/>
            <DashboardCharts/>
           
            <ChartsSecondRow/>
            
            <ChartsThirdRow/>

        </div>
    )
}
