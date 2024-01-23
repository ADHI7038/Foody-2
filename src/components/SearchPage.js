import React from 'react'
import '../components/Navbar.css'
import foodAppLogo from '../components/foodAppLogo.png';
import { Link } from 'react-router-dom';
import briyani from '../components/briyani.png'
import idli from '../components/idli.png'
import parotta from '../components/parotta.png'
import dosa from '../components/dosa.png'
import icecream from '../components/icecream.png'
import StaticNavbar from './StaticNavbar';
function search() {
    alert("you clicked briyani!")
}



function SearchPage() {
  return (
    <div>
       

    <StaticNavbar />


    <div id='searchBar'>
        <input id='inputBar' placeholder='Search for the Food' ></input>

    </div>

    <div id='populars'>
      <b id='Popularcuisines'>Popular cuisines</b>

      <div id='cuisinesimages'>
        <Link to={"/briyani"}><img src={briyani} /></Link>
        <Link to={"/idli"}><img src={idli} /></Link>    
        <Link to={"/parotta"}><img src={parotta} /></Link>    
        <Link to={"/icecream"}> <img src={icecream} /></Link>    
        <Link to={"/dosa"}><img src={dosa} /></Link>   
            
      </div>

    </div> 

    

</div>
  )
}

export default SearchPage


// <button >
// <img src={briyani} />
// <img src={dosa} />
// <img src={parotta} />
// <img src={idli} />
// <img src={icecream} />
// </button>

