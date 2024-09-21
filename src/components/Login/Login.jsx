import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./Login.css"

const Login = () => {
    const navigate = useNavigate()
    return (
        <div className="login-container">
            {/* <Logo className="logo" /> */}

            <input
                type="email"
                placeholder="Email"
                className="input"
            />

            <input
                type="password"
                placeholder="Password"
                className="input"
            />

            <div className="checkbox-container">
                <input
                    type="checkbox"
                    className="checkbox"
                />
                Remember me
            </div>

            <button
                onClick={() => navigate("/dashboard")}
                className="button"
            >
                Submit
            </button>

            <div className="links-container">
                <div>
                    Don't have an account?{" "}
                    <Link className="link" to="/register">
                        Sign up!
                    </Link>
                </div>
                <Link className="link" to="/forgot-password">
                    Forgot password?
                </Link>
            </div>
        </div>
    )
}

export default Login