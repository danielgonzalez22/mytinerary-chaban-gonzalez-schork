import { useRef, useEffect, useState } from "react"
import * as jose from "jose"
import { useUserSignUpMutation } from "../features/actions/usersApi"
import Alert from "../components/Alert";

export default function GoogleSignUp() {
  const buttonDiv = useRef(null)
  let [newUser, { data: resSignUp, error }] = useUserSignUpMutation()
  const [showAlert, setShowAlert] = useState(false)


  async function handleCredentialResponse(response) {
    let userObject = jose.decodeJwt(response.credential)
    console.log(userObject)
    let data = {
      name: userObject.given_name,
      lastname: userObject.family_name,
      photo: userObject.picture,
      country: "Argentina",
      email: userObject.email,
      password: userObject.sub,
      role: 'user',
      from: 'google'
    }
    newUser(data)
    setShowAlert(true)
  }
  useEffect(() => {
    if (showAlert) {
      setTimeout(() => {
        setShowAlert(false)
      }, 5000)
    }
  }, [resSignUp, error])
  useEffect(() => {
    /*global google */
    google.accounts.id.initialize({
      client_id: "273414375096-cnn3h8j0u985jn49k0gsrp7cfjg00fm4.apps.googleusercontent.com",
      callback: handleCredentialResponse
    });
    google.accounts.id.renderButton(
      buttonDiv.current,
      { theme: "filled_black", size: "large", shape: "pill", text: "signup_with" }  // customization attributes
    );
  }, [])
  return (
    <div>
      <div ref={buttonDiv} ></div>
      {showAlert ?
        <Alert res={resSignUp} err={error} />
        : null}
    </div>
  )
}

