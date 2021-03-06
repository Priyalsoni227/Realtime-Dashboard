import { blue, green, orange } from '@material-ui/core/colors';
import { useEffect, useState } from 'react';
import { Bar, Chart } from 'react-chartjs-2';
import db from '../firebase';
import usePartDetails from './PartDetailsHook';

export default function AnalyticsGraph() {
  const [totalOrder, setTotalOrders] = useState(0);

  let [isGood5By2,setIsGood5By2]=useState(0)
  let [isGood3By2,setIsGood3By2]=useState(0)
  let [isDefective5By2,setIsDefective5By2]=useState(0)
  let [isDefective3By2,setIsDefective3By2]=useState(0)

  useEffect(() => {
    db.collection('Order').where('Type', '==','5/2').where('Good','==',1).onSnapshot((snap) => {
      // setTotalOrders(snap.size)
      console.log("Good 5/2 :" +snap.size)
      setIsGood5By2(snap.size)
    })
    
  },[]);
  useEffect(() => {
    db.collection('Order').where('Type', '==','3/2').where('Good','==',1).onSnapshot((snap) => {
      // setTotalOrders(snap.size)
      console.log("Good 3/2: " +snap.size)
      setIsGood3By2(snap.size)
    })
  },[]);
  useEffect(() => {
    db.collection('Order').where('Type', '==','5/2').where('Defective','==',1).onSnapshot((snap) => {
      // setTotalOrders(snap.size)
      console.log("Defective 5/2: " +snap.size)
      setIsDefective5By2(snap.size)
    })
  },[]);
  useEffect(() => {
    db.collection('Order').where('Type', '==','3/2').where('Defective','==',1).onSnapshot((snap) => {
      // setTotalOrders(snap.size)
      console.log("Defective 3/2: " +snap.size)
      setIsDefective3By2(snap.size)
    })
  },[]);
  
  console.log(totalOrder)
  // const { defective3By2, defective5By2, good3By2, good5By2 } = usePartDetails();

  // console.log(good5By2 + " " + defective5By2 + " " + good3By2 + " " + defective3By2);
  const labels = ['5/2', '3/2'];
  var data = {
    labels: labels,
    datasets: [{
      label: "Good Part",
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
      borderColor: 'rgb(255, 99, 132)',
      data: [isGood5By2, isGood3By2]
    }, {
      label: "Defective",
      backgroundColor: 'rgba(255, 159, 64, 0.5)',
      boderColor: 'rgb(255, 159, 64)',
      data: [isDefective5By2, isDefective3By2]
    },]
  };

  const config = {
    reponsive: true,
    maintainAspectRatio: false,
    height: 70+'vh',
    scales: {
      x: {
      },
      y: {
        title: {
          display: false,
          text: 'Value'
        }
      }
    },
    interaction: {
      intersect: false
    },
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
        labels: {
          fontSize: 0.1 + 'vw',
          color: 'hsl(238, 61%, 19%)',
          font: '"Baloo Da 2", cursive',
          borderRadius: 100 + 'px'
        }
      }
    },
  };




  return (
    <div style={{ width: 100 + '%', height: 80+'%' }}>
      <Bar data={data} options={config} />
    </div>
  )
}


// import React from 'react'
// import { Bar } from 'react-chartjs-2';
// import {useState,useEffect} from "react"
// import db from '../firebase.js'   

// export const AnalyticsGraph = () => {
// let fiveTwoCount=0
// let threeTwoCount=0

//   let [orderType,setOrderType]=useState([])
	
// 	useEffect(() => {
//         db.collection("Order").where("Type","in",["5/2","3/2"])
// 		.get().then(querySnapshot=>{
// 			querySnapshot.forEach((doc)=>{
//         if(doc.data().Type==="5/2"){
//              fiveTwoCount+=1
//         }
//         else if(doc.data().Type==="3/2"){
//              threeTwoCount+=1
//         }
        
//       })
      
//     })
     
			
			
// 		console.log(fiveTwoCount)
//     },[])
//     const data = {
//             labels: ['5/2', '3/2'],
//             datasets: [
//               {
//                 label: '# of Red Votes',
//                 data: [fiveTwoCount, threeTwoCount],
//                 backgroundColor: 'rgb(255, 99, 132)',
//               }
              
//             ],
//           };
          
//           const options = {
//             scales: {
//               yAxes: [
//                 {
//                   stacked: true,
//                   ticks: {
//                     beginAtZero: true,
//                   },
//                 },
//               ],
//               xAxes: [
//                 {
//                   stacked: true,
//                 },
//               ],
//             },
//           };
//     return (
//         <div>
//                    <Bar data={data} options={options} />
//         </div>
//     )
// }
