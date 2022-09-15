import {Link as LinkRouter} from 'react' 
import React from 'react'
import Input from './Input';

const NewItineraryComponent = () => {
  return (

    <form className="SignUp-form" >
    <Input text="Name"></Input>
    <Input text="Last Name" ></Input>
    <Input text="URL Photo "></Input>
    <Input text="Email Address" ></Input>
    <Input text="Create Password" ></Input>
    <div className='SignUp-Container'>
    <button  className="SignUp-button" >Create Account</button>
    <button  className="SignUp-button" >Google</button>
    </div>
      <LinkRouter to='/' className="SingUp1-button">You have an account?</LinkRouter>
      <LinkRouter to='/' className="SingUp1-button">Please sign in</LinkRouter>
  </form>



  )
}

export default NewItineraryComponent