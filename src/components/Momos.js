import React, { useEffect, useState } from 'react'
import StaticNavbar from './StaticNavbar'
import './IceCream.css'
import momo_1 from '../components/momo_1.png';
import momo_2 from '../components/momo_2.png';
import momo_3 from '../components/momo_3.png';
import momo_4 from '../components/momo_4.png';
import momo_5 from '../components/momo_5.png';
import momo_6 from '../components/momo_6.png';
import momo_7 from '../components/momo_7.png';
import momo_8 from '../components/momo_8.png';
import { Link } from 'react-router-dom';

function Momos() {
  const [count, setCount] = useState(0)
  useEffect(()=> {
    Momos.noItemSelected = `No of Items Selected ${count} `
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

  function D1(){setK(K +   69)}
  function D2(){setK(K +  125)}
  function D3(){setK(K +   99)}
  function D4(){setK(K +  240)}
  function D5(){setK(K +  159)}
  function D6(){setK(K +  339)}
  function D7(){setK(K +  130)}
  function D8(){setK(K +  120)}

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
          <div id='chooseFlavor'><p>Choose Your Favorite Momos</p></div>
          <div id='firstDiv'><Link><img  id='pizImg' onClick={setPrice1} src={momo_1} width="480px" height="480px" /></Link> <Link><img  id='pizImg' onClick={setPrice2} src={momo_2} width="480px" height="480px" /></Link></div>
          <div id='firstDiv'><Link><img  id='pizImg' onClick={setPrice3} src={momo_3} width="480px" height="480px" /></Link> <Link><img  id='pizImg' onClick={setPrice4} src={momo_4} width="480px" height="480px" /></Link></div>
          <div id='firstDiv'><Link><img  id='pizImg' onClick={setPrice5} src={momo_5} width="480px" height="480px" /></Link> <Link><img  id='pizImg' onClick={setPrice6} src={momo_6} width="480px" height="480px" /></Link></div>
          <div id='firstDiv'><Link><img  id='pizImg' onClick={setPrice7} src={momo_7} width="480px" height="480px" /></Link> <Link><img  id='pizImg' onClick={setPrice8} src={momo_8} width="480px" height="480px" /></Link></div>
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

export default Momos