import React, { useEffect, useState } from 'react'
import StaticNavbar from './StaticNavbar'
import './IceCream.css'
import par_1 from '../components/par_1.png';
import par_2 from '../components/par_2.png';
import par_3 from '../components/par_3.png';
import par_4 from '../components/par_4.png';
import par_5 from '../components/par_5.png';
import par_6 from '../components/par_6.png';
import par_7 from '../components/par_7.png';
import par_8 from '../components/par_8.png';
import { Link } from 'react-router-dom';

function Parotta() {
  const [count, setCount] = useState(0)
  useEffect(()=> {
    Parotta.noItemSelected = `No of Items Selected ${count} `
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

  function D1(){setK(K +   79)}
  function D2(){setK(K +  115)}
  function D3(){setK(K +  270)}
  function D4(){setK(K +   20)}
  function D5(){setK(K +  215)}
  function D6(){setK(K +   60)}
  function D7(){setK(K +  249)}
  function D8(){setK(K +  179)}

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
        <div id='chooseFlavor'><p>Choose Your Favorite Parotta</p></div>
        <div id='firstDiv'><Link><img  id='pizImg' onClick={setPrice1} src={par_1}  width="480px" height="480px" /></Link> <Link><img  id='pizImg' onClick={setPrice2} src={par_2} width="480px" height="480px" /></Link></div>
        <div id='firstDiv'><Link><img  id='pizImg' onClick={setPrice3} src={par_3}  width="480px" height="480px" /></Link> <Link><img  id='pizImg' onClick={setPrice4} src={par_4} width="480px" height="480px" /></Link></div>
        <div id='firstDiv'><Link><img  id='pizImg' onClick={setPrice5} src={par_5}  width="480px" height="480px" /></Link> <Link><img  id='pizImg' onClick={setPrice6} src={par_6} width="480px" height="480px" /></Link></div>
        <div id='firstDiv'><Link><img  id='pizImg' onClick={setPrice7} src={par_7}  width="480px" height="480px" /></Link> <Link><img  id='pizImg' onClick={setPrice8} src={par_8} width="480px" height="480px" /></Link></div>
        </div>
        <div id='selectedItems'>
            <p id='itemSelected' >THE ITEMS YOU SELECTED </p>
            <p id='noItemSelected' >No of Items Selected  {count}</p>
            <p id='totalAmount' >Total Amount  {K} </p>
            <Link to={"/cart"}><button id='addToCart'>Add to Cart</button></Link>
        </div>
    </div>
  )
}

export default Parotta