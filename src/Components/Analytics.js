import React from 'react'
import { DashboardCharts } from './DashboardCharts'
import './css/DashboardCharts.css'
import { ChartsSecondRow } from './ChartsSecondRow'
import { ChartsThirdRow } from './ChartsThirdRow'
import {ReportButton} from './ReportButton'
import { OrderHistory } from './OrderHistory'
import './css/OrderHistory.css'

export const Analytics = () => {
    return (
        <div>
           <ReportButton/>
            <DashboardCharts/>
           
            <ChartsSecondRow/>
            
            {/* <ChartsThirdRow/> */}

           <OrderHistory/>
        </div>
    )
}
