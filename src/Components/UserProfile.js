import React from 'react'
import './css/UserProfile.css'
import {Card} from '@material-ui/core'
import profile from '../assets/img/photo.jpg'

export const UserProfile = () => {
    return (
        <div className="userProfileContainer">

            <div className="userDetailsLeft">
                <Card>
                    <h2>Edit Profile</h2>
                    <form>
                        <div className="form-container">
                       <div className="flexRow">
                           <div className="user-name">
                               <label for="user-name">Username</label>
                               <input type="text" id="user-name" value="PriyalSoni227"/>
                           </div>
                           <div className="email-address">
                               <label for="email-address">Email Address</label>
                               <input type="email" id="email-address" value="priyalsoni77@gmail.com"/>
                           </div>
                       </div>
                       
                    
                       <div className="flexRow">
                           <div className="first-name">
                               <label for="user-name">First Name</label>
                               <input type="text" id="first-name" value="Priyal"/>
                           </div>
                           <div className="last-name">
                               <label for="email-address">Last Name</label>
                               <input type="text" id="last-name" value="Soni"/>
                           </div>
                       </div>
                       <div className="flexRow">
                           <div className="address">
                               <label for="address">Address</label>
                               <input type="text" id="address" value="B-15 Shree Govardhan Park Soc., Harni Rd."/>
                           </div>
                          
                       </div>
                       <div className="flexRow">
                           <div className="city">
                               <label for="city">City</label>
                               <input type="text" id="city" value="Vadodara"/> 
                           </div>
                           <div className="country">
                               <label for="country">Country</label>
                               <input type="text" id="country" value="India"/>
                           </div>
                           <div className="postal-code">
                               <label for="postal-code">Postal</label>
                               <input type="text" id="postal-code" value="390006"/>
                           </div>
                          
                       </div>
                       </div>
                    </form>
                    <h4>Change Password</h4>
                </Card>
                </div>
            <div className="userDetailsRight">
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
                            <div className="fullname">Priyal Soni</div>
                            <div className="username">PriyalSoni227</div>
                            <div className="email">priyalsoni77@gmail.com</div>
                        </div>
                    </div>
                </Card>
                </div>
        </div>
    )
}
