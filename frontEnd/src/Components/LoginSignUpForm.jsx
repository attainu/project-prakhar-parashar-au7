import React from 'react';
import './styles/loginSignup.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'


const LoginSignUpForm = (props) => {

    const [userName, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')

    const handleClick = (e) => {
        e.preventDefault()
        props.formType === 'Register' ? props.userRegistered({ userName, password, email }) : props.userLoggingIn({ userName, password })
    }
    return (
        <div id="form">

            <form className="form">

                <div id="fields">
                    {
                        (props.formType === "Register") &&
                        <div>
                            <input onChange={(event) => setEmail(event.target.value)} type="email" className="input" placeholder="Email"></input>
                            <br></br><br></br>
                        </div>
                    }
                    
                    <input onChange={(event) => setUsername(event.target.value)} type="text" className="input" placeholder="Username"></input>
                    <br></br><br></br>
                    <input type="password" onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password"></input>
                    <br></br><br></br>

                    <button type="submit" onClick={handleClick} className="btn btn-primary">{props.formType}</button>

                    <br></br><br></br><br></br>
                    {(props.formType === "Login") &&
                        <>
                            <Link to="/ForgotPassword">Forgot Password?</Link>
                            <br></br><br></br>
                            <Link to="/Register">New user? Register here</Link>
                        </>
                    }
                    {
                        (props.formType === "Register") &&

                        <Link to="/">Already Registered? Login Here</Link>
                    }
                </div>
            </form>
        </div>

    )
}

export default LoginSignUpForm