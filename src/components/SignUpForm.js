import React, { useState, useRef } from 'react'
import Modal from './Modal';
import Input from './Input';
import '../styles/SignUp.css'
import { Link as LinkRouter } from 'react-router-dom'
import { useUserSignUpMutation } from '../features/actions/usersApi'

const SignUpForm = (props) => {
  const [postUser, { data: body, error, isSuccess }] = useUserSignUpMutation()
  let alertMessage = ""
  if (body?.success) {
    alertMessage = body?.message
    console.log(body.success)
  } else if (error) {
    alertMessage = error?.data.message
    console.log(isSuccess)
  }
  const [isOpen, setIsOpen] = useState()
  const closeModal = () => setIsOpen(false);
  const role = props.role
  const name = useRef()
  const lastName = useRef()
  const country = useRef()
  const photo = useRef()
  const email = useRef()
  const pass = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()
    const newUser = {
      name: name.current.value,
      lastName: lastName.current.value,
      mail: email.current.value,
      password: pass.current.value,
      country: country.current.value,
      photo: photo.current.value,
      role: role,
      from: "form"
    }
    console.log(newUser)
    postUser(newUser)
    setIsOpen(true)
    setTimeout(() => {
      setIsOpen(false)
    }, 5000)
  }
  return (
    <>
      <Modal isOpen={isOpen}
        closeModal={closeModal} text={alertMessage} result={isSuccess} />
      <div className="signUp-main">
        <div className='signUp-container'>
          <div className="signUp-body">
            <div className="signUp-img">
              <img src="https://img.icons8.com/external-bearicons-outline-color-bearicons/344/external-sign-up-call-to-action-bearicons-outline-color-bearicons-2.png" alt="icon" />
            </div>
          </div>
          {role === "Admin" ?
            <>
              <h1 className="h1-form">
                ADMIN Sign up <span className="my-style"> </span>
              </h1>
              <form className="signUp-form" onSubmit={handleSubmit}>
                <Input text="Name" reference={name}></Input>
                <Input text="Last Name" reference={lastName}></Input>
                <Input text="Country" reference={country}></Input>
                <Input text="URL Photo" reference={photo}></Input>
                <Input text="Email Address" reference={email}></Input>
                <Input text="Create Password" reference={pass}></Input>
                <button className="signUp-button" >Create Account</button>
              </form>
            </>
            :
            <>
              <h1 className="h1-form">
                Sign up <span className="my-style"> </span>
              </h1>
              <form className="signUp-form" onSubmit={handleSubmit} >
                <Input text="Name" reference={name}></Input>
                <Input text="Last Name" reference={lastName}></Input>
                <Input text="Country" reference={country}></Input>
                <Input text="URL Photo" reference={photo}></Input>
                <Input text="Email Address" reference={email}></Input>
                <Input text="Create Password" reference={pass}></Input>
                <div className='signUp-Container Buttons-containerV0FINAL'>
                  <button className="signUp-button" >Create Account</button>
                </div>
                <LinkRouter to='/auth/login' className="singUp1-button">Already have an account?Please sign in</LinkRouter>
              </form>
            </>
          }
        </div>
      </div>
    </>
  )
}
export default SignUpForm








