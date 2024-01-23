import React from 'react'
import '../components/Navbar.css'
import new_logo from '../components/new_logo.png';
import briyani from '../components/briyani.png'
import pizza from '../components/pizza.png'
import idli from '../components/idli.png'
import chinese from '../components/chinese.png'
import parotta from '../components/parotta.png'
import dosa from '../components/dosa.png'
import icecream from '../components/icecream.png'
import burger from '../components/burger.png'
import momos from '../components/momos.png'
import { Link } from 'react-router-dom';
import '../components/FoodTemplates'
import offers_1 from '../components/offers_1.png'
import offers_2 from '../components/offers_2.png'
import offers_3 from '../components/offers_3.png'
import offers_4 from '../components/offers_4.png'

function search() {
    alert("you clicked briyani!")
}

function pichha(){
  alert("you clicked pizza!")
}
  

function Navbar() {
  return (
    <div>
        <div id='menubar'>
          <img id='logo' src={new_logo} width="10vw" height="10vh" />

            {/* <input id='secondSearch' type='search' placeholder='SEARCH' /> */}
            {/* <p  onClick={searchPage}>Search</p> */}
            <Link id='home' to={"/"}>Home</Link>
            <Link id='second' to={"/about"}  >Search</Link>
            <Link id='offer' to={"/offers"}>Offers</Link>
            <Link id='help' to={"/help"}>Help</Link>
            <Link id='signin' to={"/signin"}>SignIN</Link>
            <Link id='cart' to={"/cart"}>Cart</Link>
        
        </div>  

        <div id='offerTemplates'>
          <Link to={"/briyani"}><img src={offers_1} /></Link>
          <Link to={"/icecream"}><img src={offers_2} /></Link>
          <Link to={"/pizza"}><img src={offers_3} /></Link>
          <Link to={"/burger"}><img src={offers_4} /></Link>
        </div>

        <div id='choose'>
          <div>
              <b id='cwoym'>Choose what's on Your Mind?</b>
          </div>
          <div id='items'>
            <button id='imgbtns'>
              <Link to={"/briyani"} > <img src={briyani} /> </Link>
              <Link to={"/pizza"} ><img src={pizza}/></Link>
              <Link to={'/icecream'}><img src={icecream} /></Link>
              <Link to={'/burger'}><img src={burger} /></Link>
              <Link to={'/idli'}><img src={idli} /></Link>
              <Link to={'/parotta'}><img src={parotta} /></Link>
              <Link to={'/momos'}><img src={momos} /></Link>
              <Link to={'/dosa'}><img src={dosa} /></Link>
              <Link to={'/chinese'}><img src={chinese} /></Link>
              
            </button>
              
          </div>
          
        </div>
        <div id='developerDetails'>
            <div id='bio'>
                <b>About Me</b>
                <p>Name : S.ADITHYA ARAVIND</p>
                <p>FULL STACK DEVELOPER</p>
                <p>Qualification : BE</p>
                <p>Branch : ECE</p>
            </div>
            <div id='bio1'>
                <b>Contact Me</b>
                <p>PhoneNumber : 9626040738 </p>
                <a href='adithya.saravanan38@gmail.com'><p>GMail : adithya.saravanan38@gmail.com</p></a>
               
            </div>
            <div id='bio2'>
                <b>Skills</b>
                <p>HTML5 CSS3 BootStrap</p><progress value={80} max={100}></progress>
                <p>JAVA JavaScript </p><progress value={70} max={100}></progress>
                <p>React</p><progress value={70} max={100}></progress>
                <p>MySql</p><progress value={80} max={100}></progress>
            </div>
        </div>
    </div>
    
  )
}

export default Navbar


// const Next = useNavigate()

// function searchPage() {
  
//   // Next('/about')

//   const handleNext = () => {
//     Next('/about')
//   }
//   return(
//     <div> 
      
//         <p > Search for the Food You Want!!!</p>
//     </div>
//   )
// }


/* drop down */ 
// <div id='search'>
// <select id='ddselect'>
// <option>search</option>
// <option>briyani</option>
// <option>snacks</option>
// <option >ice creams</option>
// <option>sweets</option>
// </select>
// </div>