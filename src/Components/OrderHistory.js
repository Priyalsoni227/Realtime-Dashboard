import React from 'react'
import db from '../firebase.js'
import {useState,useEffect} from "react"

export const OrderHistory = () => {

	let [orders,setOrders]=useState([])
	
	useEffect(() => {
        db.collection("Order").orderBy("Time","desc")
		.onSnapshot(snapshot=>
			setOrders(snapshot.docs.map(doc=>doc.data()))
			)

			
			
		
    },[])


// function displayorder(){
// 	console.log(orders)
// }

	return (
		<div className="orderContainer">
			{/* <button onClick={displayorder}>Display</button> */}
			<h3>Order History</h3>
			<div className="grid">
			<div className="grid-container">
			<table>
				<thead>
					<tr>
						<th style={{width:"20%"}}>Order Type</th>
						<th style={{width:"50%"}}>TimeStamp</th>
						<th style={{width:"30%"}}>Status</th>
					</tr>
				</thead>
				<tbody>
			{
				orders.map(x=>{
					return <tr>
					<td>{x.Type}</td>
					<td>{x.Time}</td>
					<td>{x.Good=="1"?"Good":"Defective"}</td>
				</tr>
				})
			}
				</tbody>
			</table>
			</div>
			</div>
		</div>
	)
}
