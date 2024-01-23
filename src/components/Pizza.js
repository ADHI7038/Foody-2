import React, { useEffect, useState } from 'react'
import StaticNavbar from './StaticNavbar'
import Cart from './Cart';
import './IceCream.css';
import p_1 from './p_1.png';
import p_2 from './p_2.png';
import p_3 from './p_3.png';
import p_4 from './p_4.png';
import p_5 from './p_5.png';
import p_6 from './p_6.png';
import { Link } from 'react-router-dom';

function search() {
    alert("you clicked briyani!")
}


function Pizza() {

  
  const [count, setCount] = useState(0)
  useEffect(()=> {
    Pizza.noItemSelected = `No of Items Selected ${count} `
  },[count]);
  
  const numbers = [1159, 469, 549, 549, 599, 550]

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

  function D1(){setK(K +  1159)}
  function D2(){setK(K +  469)}
  function D3(){setK(K +  549)}
  function D4(){setK(K +  549)}
  function D5(){setK(K +  599)}
  function D6(){setK(K +  550)}

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
  

 
  return (
    <div>
        <div>
            <StaticNavbar />
        </div>
        <div id='MainDiv'>
          <div id='chooseFlavor'><p>Choose your Favorite Pizza</p></div>

               <div id='firstDiv'><Link><img id='pizImg' onClick={setPrice1} src={p_1} width="480px" height="480px" /> </Link> <Link><img id='pizImg'  onClick={setPrice2} src={p_2}  width="480px" height="480px" /></Link></div>
               <div id='firstDiv'><Link><img id='pizImg' onClick={setPrice3} src={p_3}  width="480px" height="480px" /></Link> <Link><img id='pizImg' onClick={setPrice4} src={p_4} width="480px" height="480px" /></Link></div>
               <div id='firstDiv'><Link><img id='pizImg' onClick={setPrice5} src={p_5} width="480px" height="480px" /></Link> <Link><img id='pizImg'  onClick={setPrice6} src={p_6}  width="480px" height="480px" /></Link></div>

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

export default Pizza 
