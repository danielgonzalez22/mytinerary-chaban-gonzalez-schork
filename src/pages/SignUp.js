import '../styles/SignUp.css'
import WebsiteLayout from '../layouts/WebsiteLayout'
import React from 'react'
import SignUpForm from '../components/SignUpForm'
export default function SignUp() {

const user = {
    name : "brucce",
    lastName:"wayne",
    image:"http://www.fotoimg.com/ee",
    email: "brucewayne@gmail.com",
    password:"1234bati",
    role:"admin"
}
  return (
    <div>

<WebsiteLayout>
    <SignUpForm user={user}></SignUpForm>
</WebsiteLayout>

    </div>
  )
}






