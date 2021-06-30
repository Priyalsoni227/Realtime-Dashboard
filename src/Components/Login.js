import React from 'react'
import { Link, Route } from 'react-router-dom'
import { Home } from './Home'
import Login_img from '../assets/img/Login_img.svg'
import {useState,useEffect} from "react"
import db from '../firebase.js'
import { Header } from './Header'

export const Login = () => {
     
    let db_email=''
    let db_password=''

    const initialFieldValues = {
      
        email:'',
        password:''
     
    }


    var [values,setValues]=useState(initialFieldValues)


    const handleInputChange=(e)=>{
        var {name,value}=e.target
        setValues({
            ...values,
            [name]:value
        })

    }


    const handleFormSubmit=(e)=>{
        e.preventDefault()
        db.collection("User").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                // console.log(`${doc.id} => ${doc.data().Email}  `);
                // console.log(doc.id)
                // console.log(doc.data())
                db_email= doc.data().Email
                db_password=  doc.data().Password
                console.log(db_email)
                console.log(db_password)
           
           
            });

        if(values.email==db_email && values.password==db_password){
            alert("Welcome Priyal")
        }
        else{
            alert("Wrong username or password")
        }
        });
    
       
    }

    return (
        <>
        <Header/>
        <div id="login_page" className="d-flex align-items-center">

            <div className="container">
                <div className="row">

                    <div className="col-lg-8 js-tilt" data-tilt>
                        <img src={Login_img} alt="IMG" />
                    </div>

                    <form className="col-lg-4 validate-form" onSubmit={handleFormSubmit}>
                        <span className="login100-form-title">
                            Member Login
					</span>

                        <div className="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                            <input className="input100" type="text" name="email" value={values.email} onChange={handleInputChange} placeholder="Email" />
                            <span className="focus-input100"></span>
                            <span className="symbol-input100">
                                <i className="fa fa-envelope" aria-hidden="true"></i>
                            </span>
                        </div>

                        <div className="wrap-input100 validate-input" data-validate="Password is required">
                            <input className="input100" type="password" name="password" value={values.password} onChange={handleInputChange} placeholder="Password" />
                            <span className="focus-input100"></span>
                            <span className="symbol-input100">
                                <i className="fa fa-lock" aria-hidden="true"></i>
                            </span>
                        </div>

                        <div className="container-login100-form-btn">
                        <input type="submit" value="Login" className="login100-form-btn"/>
                            
                        </div>

                        <div className="text-center p-t-12">
                            <span className="txt1">
                                Forgot
						</span>
                            <a className="txt2" href="#">
                                Username / Password?
						</a>
                        </div>


                    </form>
                </div>
            </div>




        </div>
        </>
    )
}




{/* <Link to="/home">Click Here</Link>
<Route path="/home" component={Home} /> */}