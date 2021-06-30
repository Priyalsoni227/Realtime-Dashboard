import React from 'react'
import logo from '../assets/img/logo2.jpg'

export const Header = () => {
    return (
        <div>
            <header id="login-header">
                <div className="d-flex align-items-center justify-content-center">
                    <img src={logo}/>
                </div>
            </header>
        </div>
    )
}
