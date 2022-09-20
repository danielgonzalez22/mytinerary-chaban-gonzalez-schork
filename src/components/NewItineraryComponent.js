import {Link as LinkRouter} from 'react' 
import React from 'react'
import Input from './Input';


const NewItineraryComponent = () => {
  return (
    <div>
    <form className="new1-form" >
    <Input text="Name"></Input>
    <Input text="Last Name" ></Input>
    <Input text="URL Photo "></Input>
    <Input text="Email Address" ></Input>
    <Input text="Create Password" ></Input>
    <div className='new1-Container'>
    <button  className="new1-button" >Create Account</button>
    <button  className="new1-button" >Google</button>
    </div>
      <LinkRouter to='/' className="new-button">You have an account?</LinkRouter>
      <LinkRouter to='/' className="new-button">Please sign in</LinkRouter>
  </form>
  </div>
  )
}

export default NewItineraryComponent