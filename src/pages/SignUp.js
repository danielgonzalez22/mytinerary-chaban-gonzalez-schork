import GoogleSignUp from "../components/SignUpGoogle";
import '../styles/SignUp.css';
import WebsiteLayout from "../layouts/WebsiteLayout";
import SignUpForm from "../components/SignUpForm";

function SignUp() {
  const role = "user"
  return (
    <WebsiteLayout>
      <div className="signup-page-main">
        <SignUpForm role={role} />
        <GoogleSignUp />
      </div>
    </WebsiteLayout>
  )
}
export default SignUp















