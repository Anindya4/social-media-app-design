import "./register.css"

export default function Register() {
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
                    <input placeholder="Username" className="loginInput" />
                    <input placeholder="Email" className="loginInput" />
                    <input placeholder="Password" className="loginInput" />
                    <input placeholder="Re-write Password" className="loginInput" />
                    <button className="loginButton">Sign Up</button>
                    <button className="loginRegButt">Log into Account</button>
                </div>
            </div>
        </div>
        
    </div>
  )
}
