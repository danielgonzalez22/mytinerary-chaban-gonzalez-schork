import React, {useState, useEffect,useRef} from 'react'
import Modal from './Modal';
import Input from './Input';
import '../styles/SignUp.css'
import {Link as LinkRouter} from 'react-router-dom'




const Form = (props) => {
const role = props.user.role

    const[isOpen,setIsOpen] = useState(false);
const openModal = () => setIsOpen(true);
const closeModal = () => setIsOpen(false);

  return (
    
   <>      <Modal isOpen={isOpen} 
   closeModal={closeModal} text="Account Created Succesfully!"/>
    <div className="SignUp-main">
        <div className='SignUp-container'>
      <div className="SignUp-body">
        <div className="SignUp-img">
          <img src="https://img.icons8.com/external-bearicons-outline-color-bearicons/344/external-sign-up-call-to-action-bearicons-outline-color-bearicons-2.png" alt="icon" className='Sign-img' />
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
              <div className='SignUp-Container'>
              <button onClick={openModal} className="SignUp-button" >Create Account</button>
              <button onClick={openModal} className="SignUp-button" >Google</button>
              </div>
              {/* <a href='_blank'>You have an account?</a>
                <a href='#'>Please sign in</a>
                <button  >You have an account?</button> */}
                <LinkRouter to='/' className="SingUp1-button">You have an account?</LinkRouter>
                <LinkRouter to='/' className="SingUp1-button">Please sign in</LinkRouter>
            </form>
      }
         </div>
         </>

  );
}








export default Form








