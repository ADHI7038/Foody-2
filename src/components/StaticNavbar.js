import React from 'react'
import new_logo from '../components/new_logo.png';
import { Link } from 'react-router-dom';

function search() {
    alert("you clicked briyani!")
}

function StaticNavbar() {
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
    </div>
  )
}

export default StaticNavbar