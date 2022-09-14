import '../styles/SignUp.css'
import WebsiteLayout from '../layouts/WebsiteLayout'
import React from 'react'
import Form from '../components/Form'
export default function SignUp() {

const user = {
    name : "brucce",
    lastName:"wayne",
    image:"http://www.fotoimg.com/ee",
    email: "brucewayne@gmail.com",
    password:"1234bati"
}
  return (
    <div>

<WebsiteLayout>
    <Form user={user}></Form>
</WebsiteLayout>

    </div>
  )
}






