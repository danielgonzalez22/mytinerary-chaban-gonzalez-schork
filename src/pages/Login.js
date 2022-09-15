import React from 'react'
import WebsiteLayout from '../layouts/WebsiteLayout'
import LoginForm from '../components/LoginForm'

export default function Login(){

const user = {
    name : "brucce",
    lastName:"willis",
    image:"http://www.fotoimg.com/esaa",
    email: "brucewyllis@gmail.com",
    password:"00001"
}
  return (
    
    <div>

    <WebsiteLayout>
        <LoginForm user={user}></LoginForm>
    </WebsiteLayout>
    
        </div>

  )
  }