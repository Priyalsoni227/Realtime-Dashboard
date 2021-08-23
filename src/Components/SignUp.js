import React from 'react'
import './css/SignUp.css'
import { Link, Route, useHistory } from 'react-router-dom'
import Login_img from '../assets/img/Login_img.svg'
import {useState,useEffect} from "react"
import db from '../firebase.js'
export const SignUp = () => {

    let history=useHistory();
    let exists=0;

   let values_su_i={
       username:"",
       email:"",
       firstname:"",
       lastname:"",
       password:"",
      
       address:"",
       city:"",
       country:"",
       postalcode:""

   }

   var [values_su,setValues]=useState(values_su_i)
   var [repassword,setrepassword]=useState("")

   function handleInputChangeSu(e){
    let {name,value}=e.target

    setValues({
        ...values_su,
        [name]:value
    })
   }

   function handleRePasword(e){
    let {name,value}=e.target

    setrepassword(e.target.value)
   }


   function SubmitUserDetails(e){
    e.preventDefault()

    db.collection("User").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
           
            if(doc.data().email==values_su.email){
             
                exists=1
              
                
            }
            
    })
  
  
    }).catch(error=>alert(error)).then(()=>{
   
        console.log("Start")
        if(exists==0){
        if(values_su.password==repassword){
           db.collection("User").add({
               ...values_su,
               
           })
           .then(()=>{
               console.log("Successful")
               alert("Account Created")
                history.push('/')
            
           })
           .catch((error) => {
            console.error("Error writing document: ", error);
        });
    }
    else{
        alert("Passwords do not match!")
        console.log(repassword)
        console.log(values_su.password)
    }
    }
else{
    alert("User already exists!")
}
})

//     db.collection("User").get().then((querySnapshot) => {
//         querySnapshot.forEach((doc) => {
        
//             console.log(doc.id)
//             console.log(doc.data())
//             console.log(doc.data().city)
//             alert("Hello")
            
       
       
//         });
//    })
//    console.log("done")
}

    return (
        <div className="signup-outside-container">
            <div className="signup-container">
                <div>
                    {/* <div className="signup-title">Sign Up</div> */}
                <form onSubmit={SubmitUserDetails}>
                    <div>

                        <div className="signup first">

                            
                                <div className="form-group-signup">
                                    <label for="username">Username:</label>
                                    <input type="text" name="username" id="username" value={values_su.username} onChange={handleInputChangeSu}/>
                                    <div className="symbol-s">
                                    <i class="fas fa-user"></i>
                                    </div>
                                </div>
                                <div className="form-group-signup">
                                    <label for="email">Email</label>
                                    <input type="email" name="email" id="email" value={values_su.email} onChange={handleInputChangeSu}/>
                                    <div className="symbol-s">
                                    <i class="fas fa-envelope"></i>
                                    </div>
                                </div>


                            

                        </div>
                    
                    <div className="signup second">
                        <div className="form-group-signup">
                            <label for="firstname">First Name:</label>
                            <input type="text" name="firstname" id="firstname" value={values_su.firstname} onChange={handleInputChangeSu}/>
                            <div className="symbol-s">
                            <i class="fas fa-user"></i>
                                    </div>
                        </div>

                        <div className="form-group-signup">
                            <label for="lastname">Last Name:</label>
                            <input type="text" name="lastname" id="lastname" value={values_su.lastname} onChange={handleInputChangeSu}/>
                            <div className="symbol-s">
                            <i class="fas fa-user"></i>
                                    </div>
                        </div>
                    </div>
                    <div className="signup fifth">
                        <div className="form-group-signup">
                            <label for="password">Password:</label>
                            <input type="password" name="password" id="password" value={values_su.password} onChange={handleInputChangeSu}/>
                            <div className="symbol-s">
                            <i class="fas fa-lock"></i>
                                    </div>
                        </div>

                        <div className="form-group-signup">
                            <label for="repassword">Repeat Password:</label>
                            <input type="password" name="repassword" id="repassword" value={repassword} onChange={handleRePasword}/>
                            <div className="symbol-s">
                            <i class="fas fa-lock"></i>
                                    </div>
                        </div>
                    </div>
                    <div className="signup third">
                        <div className="form-group-signup">
                            <label for="address">Address:</label>
                            <input type="text" name="address" id="address" value={values_su.address} onChange={handleInputChangeSu}/>
                            <div className="symbol-s">
                            <i class="fas fa-map-marker-alt"></i>
                                    </div>
                        </div>

                     
                    </div>
                    <div className="signup fourth">
                        <div className="form-group-signup">
                            <label for="city">City:</label>
                            <input type="text" name="city" id="city" value={values_su.city} onChange={handleInputChangeSu}/>
                            <div className="symbol-s">
                            <i class="fas fa-globe-americas"></i>
                                    </div>
                        </div>
                        <div className="form-group-signup">
                            <label for="country">Country:</label>
                            <input type="text" name="country" id="country" value={values_su.country} onChange={handleInputChangeSu}/>
                            <div className="symbol-s">
                            <i class="fas fa-globe-americas"></i>
                                    </div>
                        </div>
                        <div className="form-group-signup">
                            <label for="postalcode">Postal Code:</label>
                            <input type="number" name="postalcode" id="postalcode" value={values_su.postalcode} onChange={handleInputChangeSu}/>
                            <div className="symbol-s">
                            <i class="fas fa-square"></i>
                                    </div>
                        </div>
                  
                     
                     
                    </div>
                    <div className="signup-group">
                    <div className="signup-btn" >
                         <input type="submit" value="Sign Up"/>
                     </div>

                     <div className="already-account-login" onClick={()=>{
                     history.push('/')
                 }}>
                         Already have account? Login
                     </div>
                     </div>
                    </div>
                </form>
                </div>
            </div>
        </div>
    )
}
