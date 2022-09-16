
import React, {useState, useEffect,useRef} from 'react'
import Modal from './Modal';
import Input from './Input';
import '../styles/SignUp.css'
import {Link as LinkRouter} from 'react-router-dom'



const SignIncomponent = () => {
    const[isOpen,setIsOpen] = useState(false);
    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);
  return (
    
    
   <>      <Modal isOpen={isOpen} 
   closeModal={closeModal} text="Account Created Succesfully!"/>
    <div className="SignUp-main">
        <div className='SignUp-container'>
      <div className="SignUp-body">
      
          <img src="https://img.icons8.com/external-bearicons-outline-color-bearicons/344/external-sign-up-call-to-action-bearicons-outline-color-bearicons-2.png" alt="icon" className='Sign-img' />
        </div>
        <h1 className="h1-form">
            Login<span className="my-style"> </span>
          </h1>


            <form className="SignUp-form" >
              <Input text="Email"></Input>
              <Input text="Password" ></Input>
             <div>

              <div className='SignUp-Container Buttons-containerV0FINAL'>
              <button onClick={openModal} className="SignUp-button" >Login</button>
              <button onClick={openModal} className="SignUp-button" >Google</button>
              </div>
              <div className='button-container'>
                <LinkRouter to='/' className="SingUp1-button">Please, Sign Up!!</LinkRouter>
              </div>
             </div>
            </form>
        </div>
      
         </div>
         </>

  )
}

export default SignIncomponent