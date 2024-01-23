import React, { useEffect, useState } from 'react'
import StaticNavbar from './StaticNavbar'
import './IceCream.css'
import id_1 from './id_1.png'
import id_2 from './id_2.png'
import id_3 from './id_3.png'
import id_4 from './id_4.png'
import id_5 from './id_5.png'
import id_6 from './id_6.png'
import id_7 from './id_7.png'
import id_8 from './id_8.png'
import { Link } from 'react-router-dom'

function Idli() {
  const [count, setCount] = useState(0)
  useEffect(()=> {
      Idli.noItemSelected = `No of Items Selected ${count} `
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

  function D1(){setK(K +  120)}
  function D2(){setK(K +   60)}
  function D3(){setK(K +   85)}
  function D4(){setK(K +   90)}
  function D5(){setK(K +  112)}
  function D6(){setK(K +   60)}
  function D7(){setK(K +   49)}
  function D8(){setK(K +  135)}

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
        <div id='chooseFlavor'><p>Choose your Favorite Idli</p></div>
        <div id='firstDiv'><Link><img id='pizImg' onClick={setPrice1} src={id_1} width="480px" height="480px" /></Link> <Link><img id='pizImg' onClick={setPrice2} src={id_2} width="480px" height="480px" /></Link></div>
        <div id='firstDiv'><Link><img id='pizImg' onClick={setPrice3} src={id_3} width="480px" height="480px" /></Link> <Link><img id='pizImg' onClick={setPrice4} src={id_4} width="480px" height="480px" /></Link></div>
        <div id='firstDiv'><Link><img id='pizImg' onClick={setPrice5} src={id_5} width="480px" height="480px" /></Link> <Link><img id='pizImg' onClick={setPrice6} src={id_6} width="480px" height="480px" /></Link></div>
        <div id='firstDiv'><Link><img id='pizImg' onClick={setPrice7} src={id_7} width="480px" height="480px" /></Link> <Link><img id='pizImg' onClick={setPrice8} src={id_8} width="480px" height="480px" /></Link></div>
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

export default Idli