import React, { useState, useEffect } from 'react'
import './IceCream.css';
import i_1 from './i_1.png';
import i_2 from './i_2.png';
import i_3 from './i_3.png';
import i_4 from './i_4.png';
import i_5 from './i_5.png';
import i_6 from './i_6.png';
import i_7 from './i_7.png';
import i_8 from './i_8.png';
import { Link, useActionData } from 'react-router-dom';
import Cart from './Cart'
import StaticNavbar from './StaticNavbar';


function search() {
  alert("you clicked briyani!")
}




function IceCream() {
  
    const [count, setCount] = useState(0)
    useEffect(()=> {
      IceCream.noItemSelected = `No of Items Selected ${count} `
    },[count]);
    
    let [K, setK] = useState(0)
    const Iceuh = () => {
     
      
      return(
          <Cart K = {K} />
      );
    }
    const [addC, setAddC] = useState(0)
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
    function D2(){setK(K +  104)}
    function D3(){setK(K +  104)}
    function D4(){setK(K +  115)}
    function D5(){setK(K +  248)}
    function D6(){setK(K +  289)}
    function D7(){setK(K +  279)}
    function D8(){setK(K +  399)}
  
    function addCa(){
      setAddC(addC + K)
  }

    function setPrice1(){C()
      D1()}
    function setPrice2(){C() 
      D2()}
    function setPrice3(){C() 
      D3()
      addCa()}
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
    
      let totAmount = 0;
      

  return (
    <div>
        <div>
            <StaticNavbar />
        </div>
        <div id='MainDiv'>
            <div id='chooseFlavor'><p>Choose your Favorite Ice Cream</p></div>
            <div id='firstDiv'><Link><img id='pizImg' onClick={setPrice1} src={i_1} /></Link> <Link><img id='pizImg' onClick={setPrice2} src={i_2} /></Link></div>
            <div id='firstDiv'><Link><img id='pizImg' onClick={setPrice3} src={i_3} /></Link> <Link><img id='pizImg' onClick={setPrice4} src={i_4} /></Link></div>
            <div id='firstDiv'><Link><img id='pizImg' onClick={setPrice5} src={i_5} /></Link> <Link><img id='pizImg' onClick={setPrice6} src={i_6} /></Link></div>
            <div id='firstDiv'><Link><img id='pizImg' onClick={setPrice7} src={i_7} /></Link> <Link><img onClick={setPrice8} id='pizImg' src={i_8} /></Link></div>            
        </div>
        <div id='selectedItems'>
            <p id='itemSelected' >THE ITEMS YOU SELECTED </p> 
            <p id='noItemSelected' >No of Items Selected  {count}</p>
            <p id='totalAmount' >Total Amount  {K} </p>
            <Link to={{ pathname: "/Cart", state: { K } }} />
            <Link to={`/cart/${K}`}><button id='addToCart' >Add to Cart</button></Link>
            <p>{addC}</p>
            
        </div>
      
    </div>
  )
 
}

export default IceCream