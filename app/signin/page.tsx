import GoogleButton from "@/components/GoogleButton"
import SignInForm from "@/components/SignInForm"

const SignIn = async () => {
  return (
    <div>
        <h1>
            <GoogleButton/>
            <h2>or</h2>
            <SignInForm/>
        </h1>
    </div>
  )
}

export default SignIn