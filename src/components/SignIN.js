import React from 'react'
import './SignIN.css'
import { Link } from 'react-router-dom'

function SignIN() {

//   let names = [{
//     nam : "Naveen",
//     pass : 94684
//   },

// {
//   nam : "User",
//   pass : 91087
// }]
let per = ''
let pass = ''

function getName(e) {
  per = e.target.value
  console.log(per)
}

function getPassword(e) {
  pass = e.target.value
}



function onCli() {

  if(per === "Naveen" && pass === "94864")
  {
    alert("Hi Naveen, Place Your Order")
  }
  else
  {
    alert("Hi new User, You Have to Register your Name to the Admin!!!")
  }
}


  return (
    <div>
        <div id='signINMainDiv'>

            <div id='signINSecondDiv'>
                <input id='userName' placeholder='Enter Your Name' onChange={getName} />
               <br />
               <input id='userPass' placeholder='Enter the Password' onChange={getPassword} />
               <br />
               <Link to={"/"}><button id='signinBtn' onClick={onCli} >SIGN IN</button></Link>
               
            </div>
               
        </div>
    </div>
  )
}

export default SignIN