import React, { useEffect, useState } from 'react'
import bur_1 from './bur_1.png'
import bur_2 from './bur_2.png'
import bur_3 from './bur_3.png'
import bur_4 from './bur_4.png'
import bur_5 from './bur_5.png'
import bur_6 from './bur_6.png'
import bur_7 from './bur_7.png'
import bur_8 from './bur_8.png'
import { Link } from 'react-router-dom'
import './IceCream.css'
import StaticNavbar from './StaticNavbar'

function Burger() {
  const [count, setCount] = useState(0)
  useEffect(()=> {
    Burger.noItemSelected = `No of Items Selected ${count} `
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

  function D1(){setK(K +  165)}
  function D2(){setK(K +  200)}
  function D3(){setK(K +  139)}
  function D4(){setK(K +  147)}
  function D5(){setK(K +   62)}
  function D6(){setK(K +   70)}
  function D7(){setK(K +  165)}
  function D8(){setK(K +  255)}

  function setPrice1(){C()
    D1()}
  function setPrice2(){C() 
    D2()}
  function setPrice3(){C() 
    D3()}
  function setPrice4(){C() 
    D4()}
  function setPrice5(){C() 
    D5()} 
  function setPrice6(){C() 
    D6()}
  function setPrice7(){C() 
    D7()}
  function setPrice8(){C() 
    D8()} 
  return (
    <div>
        <div>
            <StaticNavbar />
        </div>
        <div id='MainDiv'>
            <div id='chooseFlavor'><p>Choose your Favorite Burger</p></div>
            <div id='firstDiv'><Link><img id='pizImg' onClick={setPrice1} src={bur_1} width="480px" height="480px" /></Link> <Link><img id='pizImg' onClick={setPrice2} src={bur_2} width="480px" height="480px" /></Link></div>
            <div id='firstDiv'><Link><img id='pizImg' onClick={setPrice3} src={bur_3} width="480px" height="480px" /></Link> <Link><img id='pizImg' onClick={setPrice4} src={bur_4} width="480px" height="480px" /></Link></div>
            <div id='firstDiv'><Link><img id='pizImg' onClick={setPrice5} src={bur_5} width="480px" height="480px" /></Link> <Link><img id='pizImg' onClick={setPrice6} src={bur_6} width="480px" height="480px" /></Link></div>
            <div id='firstDiv'><Link><img id='pizImg' onClick={setPrice7} src={bur_7} width="480px" height="480px" /></Link> <Link><img id='pizImg' onClick={setPrice8} src={bur_8} width="480px" height="480px" /></Link></div> 
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

export default Burger