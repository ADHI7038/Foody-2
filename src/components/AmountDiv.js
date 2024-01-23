import React from 'react'
import './IceCream.css'
import IceCream from './IceCream'
import { Link } from 'react-router-dom'

function amountDiv() {
    
  return (
    <div>
        <div id='selectedItems'>
            <p id='itemSelected' >THE ITEMS YOU SELECTED </p> 
            <p id='noItemSelected' >No of Items Selected  {IceCream.count}</p>
            <p id='totalAmount' >Total Amount  {IceCream.K} </p>
            <Link to={"/cart"}><button id='addToCart'>Add to Cart</button></Link>
        </div>
    </div>
  )
}

export default amountDiv