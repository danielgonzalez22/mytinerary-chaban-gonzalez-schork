import '../styles/SignIn.css';
import { useUserSignInMutation } from "../features/actions/usersApi";
import GoogleSignIn from '../components/SignInGoogle';
import { useEffect, useState } from 'react';
import WebsiteLayout from '../layouts/WebsiteLayout';
import SignIncomponent from '../components/LoginForm';

function SignIn() {
  let [userSignIn, { data: resSignIn, error }] = useUserSignInMutation()
  function localUser(dataUser) {
    if (localStorage.getItem("user")) {
      return true
    }
    localStorage.setItem("user", JSON.stringify(dataUser))
    return false
  }
  useEffect(() => {
    if (resSignIn) {
      const isLogged = localUser(resSignIn.response.user)
      //isLogged se usara luego para verificar si ya esta logeado
    }
  }, [resSignIn])


  return (
    <WebsiteLayout>

      <div className="signin-page-main">
        <SignIncomponent />
        <GoogleSignIn localUser={localUser} />
      </div>
    </WebsiteLayout>
  )
}
export default SignIn