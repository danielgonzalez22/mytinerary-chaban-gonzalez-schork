
import React, { useState, useRef } from 'react'
import Modal from './Modal';
import Input from './Input';
import '../styles/SignUp.css'
import { Link as LinkRouter } from 'react-router-dom'
import { useUserSignInMutation } from '../features/actions/usersApi'

const SignIncomponent = () => {
  const [logUser, { data: body, error, isSuccess }] = useUserSignInMutation()
  let alertMessage = ""
  if (body?.success) {
    alertMessage = body?.message
    console.log(body.success)
  } else if (error) {
    alertMessage = error?.data.message
    console.log(isSuccess)
  }
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const email = useRef()
  const password = useRef()

  const handleSubmit = (e) => {
    email.preventDefault()
    const user = {
      mail: email.current.value,
      password: password.current.value
    }
    logUser(user)
    setIsOpen(true)
    setTimeout(() => {
      setIsOpen(false)
    }, 5000)
  }
  return (
    <>      <Modal isOpen={isOpen}
      closeModal={closeModal} text={alertMessage} result={isSuccess} />
      <div className="signUp-main">
        <div className='signUp-container'>
          <div className="signUp-body">
            <div className="signUp-img">
              <img src="https://img.icons8.com/external-bearicons-outline-color-bearicons/344/external-sign-up-call-to-action-bearicons-outline-color-bearicons-2.png" alt="icon" />
            </div>
          </div>
          <h1 className="h1-form">
            Login<span className="my-style"> </span>
          </h1>
          <form className="signUp-form" onSubmit={handleSubmit}>
            <Input text="Email" reference={email}></Input>
            <Input text="Password" reference={password}></Input>
            <div>
              <div className='signUp-Container Buttons-containerV0FINAL'>
                <button className="signUp-button" >Login</button>
              </div>
              <div className='button-container'>
                <LinkRouter to='/auth/signup' className="singUp1-button">Not have an account? Please sign up</LinkRouter>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
export default SignIncomponent