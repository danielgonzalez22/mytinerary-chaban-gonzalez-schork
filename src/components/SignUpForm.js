import React, { useState, useEffect, useRef } from 'react'
import Modal from './Modal';
import Input from './Input';
import '../styles/SignUp.css'
import { Link as LinkRouter } from 'react-router-dom'
import { useUserSignUpMutation } from '../features/actions/usersApi'

const Form = (props) => {
  const [postUser] = useUserSignUpMutation()
  const role = props.role
  const [isOpen, setIsOpen] = useState(false);
  const [success, setSuccess] = useState(false)

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  const name = useRef()
  const lastName = useRef()
  const country = useRef()
  const photo = useRef()
  const email = useRef()
  const pass = useRef()

  useEffect(() => {
    if (success) {
      setIsOpen(true)
      setTimeout(() => {
        setIsOpen(false)
      }, 5000)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [success])

  const handleSubmit = async () => {
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
    postUser(newUser)
    setSuccess(true)
  }
  return (
    <>
      <Modal isOpen={isOpen}
        closeModal={closeModal} text="Account Created Succesfully!" />
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
          {role === "Admin" ?
            <>
              <h1 className="h1-form">
                ADMIN <span className="my-style"> </span>
              </h1>
              <form className="SignUp-form" onSubmit={handleSubmit}>
                <Input text="Name" reference={name}></Input>
                <Input text="Last Name" reference={lastName}></Input>
                <Input text="Country" reference={country}></Input>
                <Input text="URL Photo" reference={photo}></Input>
                <Input text="Email Address" reference={email}></Input>
                <Input text="Create Password" reference={pass}></Input>
                <button onClick={openModal} className="SignUp-button" >Create Account</button>
              </form>
            </>
            :
            <form className="SignUp-form" >
              <Input text="Name" reference={name}></Input>
              <Input text="Last Name" reference={lastName}></Input>
              <Input text="URL Photo" reference={photo}></Input>
              <Input text="Email Address" reference={email}></Input>
              <Input text="Create Password" reference={pass}></Input>
              <div className='SignUp-Container Buttons-containerV0FINAL'>
                <button onClick={openModal} className="SignUp-button" >Create Account</button>
                <button onClick={openModal} className="SignUp-button" >Google</button>
              </div>

              <LinkRouter to='/' className="SingUp1-button">You have an account?Please sign in</LinkRouter>
            </form>
          }
        </div>
      </div>
    </>
  )
}
export default Form








