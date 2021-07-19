import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import './css/PasswordModal.css'
import db from '../firebase'
import {useState,useEffect} from "react"
import CloseIcon from '@material-ui/icons/Close';
import { Clear } from '@material-ui/icons';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 ;
  const left = 50 ;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    borderRadius:"10px",
  //  padding:"80px 0",
    width: 420,
    height:280,
    backgroundColor: theme.palette.background.paper,
    // border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function PasswordModal() {


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

let[currentPassword,setCurrentPassword]=useState("")

function handleInputChangeCurrent(e){
    let {value}=e.target

    setCurrentPassword(value)
   }


   let[newPassword,setNewPassword]=useState("")
function handleInputChangeNew(e){
    let {value}=e.target


    setNewPassword(value)
    // setUserDetails({
    //     ...user_details,
    //     [name]:value
    // })
   }


   useEffect(()=>{
       db.collection("User").doc(localStorage.getItem("currentUser")).get().then(doc=>{
          //  setCurrentPassword(doc.data().password)
           setUserDetails(doc.data())
       })
   },[])

   function updatePassword(e){
    e.preventDefault()
     if(currentPassword==user_details.password){
    db.collection("User").doc(localStorage.getItem("currentUser")).set({
        ...user_details,
        password:newPassword
    }).then(()=>{
      alert("Password Changed Successfully")
      setOpen(false);
    })
    
  }
  else{
    alert("Wrong password entered")
  }
   }



  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

 

  return (
    <div>
      <button type="button" onClick={handleOpen} className="password-modal">
        Change Password
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
         {/* <div style={modalStyle} className={classes.paper}> */}
         <div style={modalStyle} className={classes.paper}>
               <div className="close-password" onClick={()=>setOpen(false)}><Clear/></div>
             <div className="modal-container">
                 <div>
    <form onSubmit={updatePassword}>
        <div>
        <div className="old-password">
        <input type="text" placeholder="Enter old password" style={{display:"inline-block"}} value={currentPassword} onChange={handleInputChangeCurrent}/>
        </div>
        <div className="new-password">
        <input type="text" placeholder="Enter new password" style={{display:"inline-block"}} value={newPassword} onChange={handleInputChangeNew}/>
        </div>
        <div className="password-btn-save">
        <input type="submit" value="Change Password"/>
        </div>
        </div>
    </form>
    </div>
    </div>
      {/* <SimpleModal /> */}
    </div>
      </Modal>
    </div>
  );
}
