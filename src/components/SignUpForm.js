import React, {useState, useEffect,useRef} from 'react'
import Modal from './Modal';
import Input from './Input';
import '../styles/SignUp.css'
import {Link as LinkRouter} from 'react-router-dom'




const SignUpForm = (props) => {
const role = props.role

    const[isOpen,setIsOpen] = useState(false);
const openModal = () => setIsOpen(true);
const closeModal = () => setIsOpen(false);

  return (
    
   <>      <Modal isOpen={isOpen} 
   closeModal={closeModal} text="Account Created Succesfully!"/>
    <div className="SignUp-main Signup-mainV2">
        <div className='SignUp-container'>
      <div className="SignUp-body">
        <div className="SignUp-img">
          <img src="https://img.icons8.com/external-bearicons-outline-color-bearicons/344/external-sign-up-call-to-action-bearicons-outline-color-bearicons-2.png" alt="icon" className='Sign-img SignUp-imgV02' />
          <h1 className="h1-form">
            SIGN UP<span className="my-style"> </span>
          </h1>
        </div>
        </div>
        </div>

      { role == "Admin"?
            <>
            <h1 className="h1-form">
            ADMIN <span className="my-style"> </span>
            </h1>
              <form className="SignUp-form" >
              <Input text="Name"></Input>
              <Input text="Last Name" ></Input>
              <Input text="URL Photo "></Input>
              <Input text="Email Address" ></Input>
              <Input text="Create Password" ></Input>
              <button onClick={openModal} className="SignUp-button" >Create Account</button>
               
            </form>
      </>
            :
            <form className="SignUp-form" >
              <Input text="Name"></Input>
              <Input text="Last Name" ></Input>
              <Input text="URL Photo "></Input>
              <Input text="Email Address" ></Input>
              <Input text="Create Password" ></Input>
              <div className='SignUp-Container Buttons-containerV0FINAL'>
              <button onClick={openModal} className="SignUp-button" >Create Account</button>
              <button onClick={openModal} className="SignUp-button" >Google</button>
              </div>
           
                <LinkRouter to='/' className="SingUp1-button">You have an account?Please sign in</LinkRouter>
            </form>
      }
         </div>
         </>

  );
}


export default SignUpForm








