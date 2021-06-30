import React from 'react'
import './css/HeaderMain.css'
import { TextField, Fab } from '@material-ui/core'
import { Search, Dashboard, Person, Notifications} from '@material-ui/icons'

export const HeaderMain = () => {
    return (
        <header id="header">
            <div className="headerLeft">
                <p>Notifications</p>
            </div>
            <div className="headerRight">
                <div className="searchBar">
                    <form noValidate autoComplete="off">
                        <TextField id="standard-basic" />
                        <div className="fab">
                        <Fab color="#ffffff"  size="small" aria-label="add">
                           
                            <Search color="#fff"/>
                           
                        </Fab>
                        </div>
                    </form>
                </div>
                <div className="iconGroup">
                    <div className="iconItem"> <Dashboard/></div>
                    <div className="iconItem"> <Notifications/></div>
                    <div className="iconItem"><Person/></div>
                   
                 
                    
                </div>
            </div>
        </header>
    )
}
