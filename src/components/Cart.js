import React from 'react'
import './IceCream.css'
// import Pizza from './Pizza'
import IceCream from './IceCream'
import StaticNavbar from './StaticNavbar'
import { useParams } from 'react-router-dom'


function Cart(props) {

  const { id } = useParams()
  let i =0
  // IceCream.D1()
  // let valu = IceCream.setPrice1()
  let finalSentence = "Your Order is placed"
  function orderTaken() {
    setTimeout(() => {
   finalSentence = {finalSentence}
    }, 3000); 
  }

  const cart = (props) => {
      return(
        <p>{props.K}</p>
      );
  }

  return (
    <div>
        <div>
            <StaticNavbar />
        </div>
        <div id='MainDiv'>
          <p id='cartAmount' >The Total Purchased Amount {id} </p>   
          <button id='placeOrderButton' onClick={orderTaken}>Place Order</button>
       
        </div>
    </div>
  )
}

export default Cart