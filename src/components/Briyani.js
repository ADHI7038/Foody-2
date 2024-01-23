import React, { useEffect, useState } from 'react'
import StaticNavbar from './StaticNavbar'
import { Link } from 'react-router-dom'
import b from '../components/b.png';
import b_2 from '../components/b_2.png';
import b_3 from '../components/b_3.png';
import b_4 from '../components/b_4.png';
import b_5 from '../components/b_5.png';
import b_6 from '../components/b_6.png';
import b_7 from '../components/b_7.png';
import b_8 from '../components/b_8.png';
import b_9 from '../components/b_9.png';
import './IceCream.css'
function search() {
    alert("you clicked briyani!")
}


function Briyani() {
  const [count, setCount] = useState(0)
  useEffect(()=> {
    Briyani.noItemSelected = `No of Items Selected ${count} `
  },[count]);

  let  [K, setK] = useState(0)

  // useEffect(() => {
  //   K = numbers.map(function (e) 
  //   { console.log(e) 
  //   })
  //   Pizza.totalAmount = `Total Amount ${K}`
  // });
  
  function C() {
    setCount(count + 1)
  }

  function D1(){setK(K +  250)}


  function setPrice1(){C()
    D1()}
  
  

  return (
    <div>
        <div>
            <StaticNavbar />
        </div>

      <div id='MainDiv'>
       
        <div id='chooseFlavor'><p>Choose Your Favorite Briyani</p></div>
        <div id='firstDiv'><Link ><img id='pizImg'  onClick={setPrice1} src={b}   width="480px" height="480px" /></Link> <Link><img  id='pizImg' onClick={setPrice1} src={b_2} width="480px" height="480px" /></Link></div>
        <div id='firstDiv'> <Link><img id='pizImg'  onClick={setPrice1} src={b_3} width="480px" height="480px" /></Link> <Link><img  id='pizImg' onClick={setPrice1} src={b_4} width="480px" height="480px" /></Link></div>
        <div id='firstDiv'><Link><img  id='pizImg'  onClick={setPrice1} src={b_5} width="480px" height="480px" /></Link> <Link><img  id='pizImg' onClick={setPrice1} src={b_6} width="480px" height="480px" /></Link></div>
        <div id='firstDiv'><Link><img  id='pizImg'  onClick={setPrice1} src={b_7} width="480px" height="480px" /></Link> <Link><img  id='pizImg' onClick={setPrice1} src={b_8} width="480px" height="480px" /></Link></div>
        <div id='firstDiv'><Link><img  id='pizImg'  onClick={setPrice1} src={b_9} width="480px" height="480px" /></Link></div>
      </div>
      <div id='selectedItems'>
            <p id='itemSelected' >THE ITEMS YOU SELECTED </p>
            <p id='noItemSelected' >No of Items Selected  {count}</p>
            <p id='totalAmount' >Total Amount  {K} </p>
            <Link to={`/cart/${K}`}><button id='addToCart' >Add to Cart</button></Link>
        </div>  
    </div>
  )
}

export default Briyani

// width="30%" height="30%"