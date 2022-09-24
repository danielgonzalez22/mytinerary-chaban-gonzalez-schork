import GoogleSignUp from "../components/SignUpGoogle"
import '../styles/SignUp.css'
import WebsiteLayout from "../layouts/WebsiteLayout"
import SignUpForm from "../components/SignUpForm"

function SignUp() {
  const loggedUserRole = localStorage.getItem("userRole")
  return (
    <WebsiteLayout>
      <div className="signup-page-main">
        <SignUpForm role={!loggedUserRole ? "user" : loggedUserRole} />
        <GoogleSignUp />
      </div>
    </WebsiteLayout>
  )
}
export default SignUp















