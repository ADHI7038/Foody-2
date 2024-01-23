import React, { useEffect, useState } from 'react'
import StaticNavbar from './StaticNavbar'
import './IceCream.css'
import dosa_1 from '../components/dosa_1.png';
import dosa_2 from '../components/dosa_2.png';
import dosa_3 from '../components/dosa_3.png';
import dosa_4 from '../components/dosa_4.png';
import dosa_5 from '../components/dosa_5.png';
import dosa_6 from '../components/dosa_6.png';
import dosa_7 from '../components/dosa_7.png';
import dosa_8 from '../components/dosa_8.png';
import { Link } from 'react-router-dom';

function Dosa() {
  const [count, setCount] = useState(0)
  useEffect(()=> {
    Dosa.noItemSelected = `No of Items Selected ${count} `
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

  function D1(){setK(K +   80)}
  function D2(){setK(K +  130)}
  function D3(){setK(K +  110)}
  function D4(){setK(K +  100)}
  function D5(){setK(K +   95)}
  function D6(){setK(K +  125)}
  function D7(){setK(K +  114)}
  function D8(){setK(K +  150)}

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
            <div id='chooseFlavor'><p>Choose Your Favorite Dosa</p></div>
            <div id='firstDiv'><Link><img  id='pizImg' onClick={setPrice1} src={dosa_1} width="480px" height="480px" /></Link> <Link><img  id='pizImg' onClick={setPrice2} src={dosa_2} width="480px" height="480px" /></Link></div>
            <div id='firstDiv'><Link><img  id='pizImg' onClick={setPrice3} src={dosa_3} width="480px" height="480px" /></Link> <Link><img  id='pizImg' onClick={setPrice4} src={dosa_4} width="480px" height="480px" /></Link></div>
            <div id='firstDiv'><Link><img  id='pizImg' onClick={setPrice5} src={dosa_5} width="480px" height="480px" /></Link> <Link><img  id='pizImg' onClick={setPrice6} src={dosa_6} width="480px" height="480px" /></Link></div>
            <div id='firstDiv'><Link><img  id='pizImg' onClick={setPrice7} src={dosa_7} width="480px" height="480px" /></Link> <Link><img  id='pizImg' onClick={setPrice8} src={dosa_8} width="480px" height="480px" /></Link></div>
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

export default Dosa