import React from 'react'
import './css/UserProfile.css'
import {Card} from '@material-ui/core'
import profile from '../assets/img/photo.jpg'
import {useState,useEffect} from "react"
import db from '../firebase'
import PasswordModal from './PasswordModal'
import { HeaderMain1 } from './HeaderMain1'





export const UserProfile = () => {

    let user_details_i={
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

    let [user_details,setUserDetails]=useState(user_details_i)

    function handleInputChangeUP(e){
        let {name,value}=e.target
    
        setUserDetails({
            ...user_details,
            [name]:value
        })
       }


       useEffect(()=>{
           db.collection("User").doc(localStorage.getItem("currentUser")).get().then(doc=>{
               setUserDetails(doc.data())
           })
       },[])

       function updateDetails(){
        db.collection("User").doc(localStorage.getItem("currentUser")).set({
            ...user_details
        }).then(()=>alert("Details Updated Successfully"))
       }


    return (
        <>
{/* <HeaderMain1/> */}
        <div className="userProfileContainer">
            <div className="userDetailsLeft">
                <Card>
                    <h2>Edit Profile</h2>
           
                    <form>
                        <div className="form-container">
                       <div className="flexRow">
                           <div className="user-name">
                               <label for="user-name">Username</label>
                               <input type="text" id="user-name" name="username" value={user_details.username} onChange={handleInputChangeUP}/>
                           </div>
                           <div className="email-address">
                               <label for="email-address">Email Address</label>
                               <input type="email" id="email-address" name="email" value={user_details.email} onChange={handleInputChangeUP}/>
                           </div>
                       </div>
                       
                    
                       <div className="flexRow">
                           <div className="first-name">
                               <label for="user-name">First Name</label>
                               <input type="text" id="first-name" name="firstname" value={user_details.firstname} onChange={handleInputChangeUP}/>
                           </div>
                           <div className="last-name">
                               <label for="email-address">Last Name</label>
                               <input type="text" id="last-name" name="lastname" value={user_details.lastname}/>
                           </div>
                       </div>
                       <div className="flexRow">
                           <div className="address">
                               <label for="address">Address</label>
                               <input type="text" id="address" name="address" value={user_details.address} onChange={handleInputChangeUP}/>
                           </div>
                          
                       </div>
                       <div className="flexRow">
                           <div className="city">
                               <label for="city">City</label>
                               <input type="text" id="city" name="city" value={user_details.city} onChange={handleInputChangeUP}/> 
                           </div>
                           <div className="country">
                               <label for="country">Country</label>
                               <input type="text" id="country" name="country" value={user_details.country} onChange={handleInputChangeUP}/>
                           </div>
                           <div className="postal-code">
                               <label for="postal-code">Postal</label>
                               <input type="text" id="postal-code" name="postalcode" value={user_details.postalcode} onChange={handleInputChangeUP}/>
                           </div>
                          
                       </div>
                       </div>
                    </form>


                    <div className="password_update">
                    <PasswordModal/>
                    <button className="update_btn" onClick={updateDetails}>Save Changes</button>
                    </div>
                   
                    
                </Card>
                </div>
            {/* <div className="userDetailsRight">
                <Card>
                    <div className="inner-container">
                        <div className="profile-pic-container">
                                
                                 <div className="profile-pic">
                                 <img src={profile}/>
                                 <div className="change-profile">
                                 <i class="fas fa-camera"></i>
                                 </div>
                                 </div>
                        </div>
                        <div className="profile-info">
                            <div className="fullname">{`${user_details.firstname} ${user_details.lastname}`}</div>
                            <div className="username">{user_details.username}</div>
                            <div className="email">{user_details.email}</div>
                        </div>
                    </div>
                </Card>
                </div> */}
               
        </div>
        </>
    )
}
