import "./CSS/LoginSignUp.css";

function LoginSignUp(){
    return (
        <div className="loginSignup-page">
            <div className="loginSignup-container">
                <h1>Sign Up</h1>
                <div className="loginSignUp-field">
                    <input type="text" placeholder="Name" />
                    <input type="email" placeholder="Email"/>
                    <input type="password"  placeholder="Password"/>
                </div>
                <button>Continue</button>
                <p className="loginSignup-login">
                    Already have an Account ? <span>Login Here</span>
                </p>
                <div className="loginSignup-Agree">
                    <input type="checkbox" />
                    <p>I agree to the Terms of Service and Privacy Policy</p>
                </div>
            </div>
        </div>
    )
}

export default LoginSignUp;