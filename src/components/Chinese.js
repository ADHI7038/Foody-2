import React, { useEffect, useState } from 'react'
import StaticNavbar from './StaticNavbar'
import './IceCream.css'
import ch_1 from '../components/ch_1.png';
import ch_2 from '../components/ch_2.png';
import ch_3 from '../components/ch_3.png';
import ch_4 from '../components/ch_4.png';
import ch_5 from '../components/ch_5.png';
import ch_6 from '../components/ch_6.png';
import ch_7 from '../components/ch_7.png';
import ch_8 from '../components/ch_8.png';
import { Link } from 'react-router-dom';


function Chinese() {
  const [count, setCount] = useState(0)
  useEffect(()=> {
    Chinese.noItemSelected = `No of Items Selected ${count} `
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

  function D1(){setK(K +  295)}
  function D2(){setK(K +  219)}
  function D3(){setK(K +  209)}
  function D4(){setK(K +  210)}
  function D5(){setK(K +  295)}
  function D6(){setK(K +  298)}
  function D7(){setK(K +  259)}
  function D8(){setK(K +  244)}

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
            <div id='chooseFlavor'><p>Choose Your Favorite Chinese Food</p></div>
            <div id='firstDiv'><Link><img  id='pizImg' onClick={setPrice1} src={ch_1} width="480px" height="480px" /></Link> <Link><img  id='pizImg' onClick={setPrice2} src={ch_2} width="480px" height="480px" /></Link></div>
            <div id='firstDiv'><Link><img  id='pizImg' onClick={setPrice3} src={ch_3} width="480px" height="480px" /></Link> <Link><img  id='pizImg' onClick={setPrice4} src={ch_4} width="480px" height="480px" /></Link></div>
            <div id='firstDiv'><Link><img  id='pizImg' onClick={setPrice5} src={ch_5} width="480px" height="480px" /></Link> <Link><img  id='pizImg' onClick={setPrice6} src={ch_6} width="480px" height="480px" /></Link></div>
            <div id='firstDiv'><Link><img  id='pizImg' onClick={setPrice7} src={ch_7} width="480px" height="480px" /></Link> <Link><img  id='pizImg' onClick={setPrice8} src={ch_8} width="480px" height="480px" /></Link></div>
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

export default Chinese