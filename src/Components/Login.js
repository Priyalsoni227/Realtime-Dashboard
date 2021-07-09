import React from 'react'
import { Link, Route, useHistory } from 'react-router-dom'
import { Home } from './Home'
import Login_img from '../assets/img/Login_img.svg'
import {useState,useEffect} from "react"
import db from '../firebase.js'
import { Header } from './Header'
import './css/Login.css'
import logo from '../assets/img/logo2.jpg'


export const Login = () => {
    let history=useHistory()
     
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
                db_email= doc.data().email
                db_password=  doc.data().password
                console.log(db_email)
                console.log(db_password)
           
           
            });

        if(values.email==db_email && values.password==db_password){
            // alert("Welcome Priyal");
            history.push("/dashboard");

        }
        else{
            alert("Wrong username or password")
        }
        });
    
       
    }

    return (
        <>
        {/* <Header/> */}
        
        <div className="login-outside-container">
        <div className="login-container">
            <div className="login-image">
                <div className="login-image-logo">
                    <img src={logo}/>
                </div>
            </div>
         <div className="login-left">
             <img src={Login_img} alt=""/>
         </div>
         <div className="login-right">
             <div className="login-details">
                 <p>Member Login</p>
                 <form  onSubmit={handleFormSubmit}>
                     <div>
                     <div className="form-group-custom">
                         <input type="email" value={values.email} name="email" onChange={handleInputChange} placeholder="Email"/>
                         <span className="symbol">
                         <i className="fa fa-envelope" aria-hidden="true"></i>
                            </span>
                     </div>
                     <div className="form-group-custom">
                         <input type="password" value={values.password} name="password" onChange={handleInputChange} placeholder="Password" />
                         <span className="symbol">
                                <i className="fa fa-lock" aria-hidden="true"></i>
                            </span>
                     </div>
                     <div className="form-group-custom">
                     <input type="submit" value="Login"/>
                     
                     </div>
                    
                     </div>
                 </form>
                 <p className="forgot">Forgot username/password?</p>
                 <div onClick={()=>{
                     history.push('/signup')
                 }} className="create">Create your account<i class="fas fa-long-arrow-alt-right"></i></div>
                 
             </div>
         </div>
         {/* <p className="create">Create your account</p> */}
        </div>
        </div>
        
        </>
    )
}




{/* <Link to="/home">Click Here</Link>
<Route path="/home" component={Home} /> */}