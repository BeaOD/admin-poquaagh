// dashboard is first to be displayed
//total list of orders

import React from 'react'
import './dashb.css'

function Dashboard() {
  return (
    <div >
    <h2 style={{width:'100%', textAlign:'center'}}>ORDERS</h2>
    
<table style={{width:'100%', textAlign:'center', brderWidth:'3px', borderStyle:' solid '}}>
  <tr className='dash'>
    <th>Date & Time</th>
    <th>Order ID</th>
    <th>Total Bill</th>
    <th>Product Names</th>
    <th>Delivery Details</th>
  </tr>
  <tr>
    <td>A</td>
    <td>B </td>
    <td>C </td>
    <td>D </td>
    <td>E </td>
  </tr>
  <tr>
    <td>Aa</td>
    <td>Bb</td>
    <td>Cc </td>
    <td>Dd </td>
    <td>Ee </td>
  </tr>
</table>


    </div>
  )
}

export default Dashboard