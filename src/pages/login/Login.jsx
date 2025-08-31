import "./login.css"

export default function Login() {
  return (
    <div className="login">
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">Vibes</h3>
                <span className="loginDesc">
                    Connect with friends and the world around you on Vibes.
                </span>
            </div>
            <div className="loginRight">
                <div className="loginbox">
                    <input placeholder="Email" className="loginInput" />
                    <input placeholder="Password" className="loginInput" />
                    <button className="loginButton">Log In</button>
                    <span className="loginForget">Forgot Password?</span>
                    <button className="loginRegButt">Create a New Account</button>
                </div>
            </div>
        </div>
        
    </div>
  )
}
