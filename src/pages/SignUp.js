import GoogleSignUp from "../components/SignUpGoogle";
import '../styles/SignUp.css';
import Input from "../components/Input";
import { useUserSignUpMutation } from "../features/actions/usersApi";
import { useState, useEffect } from "react"
import SignUpAlert from "../components/SignUpAlert"
import WebsiteLayout from "../layouts/WebsiteLayout";

function SignUp() {
  const inputArray =[
      
      {
          name: "Name",
          type: "text",
          placeholder: "Write your name here!",
          value: ""
      },
      {
          name: "Lastname",
          type: "text",
          placeholder: "Write your last name here!",
          value: ""
      },
      {
          name: "Email",
          type: "email",
          placeholder: "Write your email here",
          value: ""
      },
      {
          name: "Country",
          type: "text",
          placeholder: "Where are you from?",
          value: ""
      },
      {
          name: "Password",
          type: "password",
          placeholder: "Insert your password",
          value: ""
      },
      {
          name: "Photo",
          type: "url",
          placeholder: "Insert the image url for your profile picture!",
          value: ""
      },
  ]
  const [showAlert,setShowAlert] = useState(false)
  let [userSignUp, { data: resSignUp, error}] = useUserSignUpMutation()
  
  const signUserForm =(arrayform) => {
      let inputsForm = arrayform.filter(element => element.value)
      let data = inputsForm.reduce((values,input)=>{
          values[input.name.trim().toLowerCase()] = input.value
          return values
      }, {})
      data.role = "user"
      data.from ="form"
      userSignUp(data)
      setShowAlert(true)
  }
  useEffect(() => {
      if (showAlert) {
          setTimeout(() => {
              setShowAlert(false)
          },5000)
      }
  },[resSignUp, error])

  return (
        <WebsiteLayout>
      <div className="signup-page-main">
          <Input inputsData={inputArray}  event={signUserForm} classPage="signup" />
          <GoogleSignUp />
          {showAlert ?
              <Alert res={resSignUp} err={error} />
              : null}
      </div>
              </WebsiteLayout>
  )
}

export default SignUp









// import WebsiteLayout from '../layouts/WebsiteLayout'
// import React from 'react'
// import Form from '../components/Form'
// export default function SignUp() {

// const user = {
//     name : "brucce",
//     lastName:"wayne",
//     image:"http://www.fotoimg.com/ee",
//     email: "brucewayne@gmail.com",
//     password:"1234bati"
// }
//   return (
//     <div>

// <WebsiteLayout>
//     <Form user={user}></Form>
// </WebsiteLayout>

//     </div>
//   )
// }






