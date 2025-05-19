import React from 'react'
import './login.css'
import movieLogo from '../../assets/Movie.png'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className='login'>
        <div className="login_container">
            <img src={movieLogo} alt="Error" />

            <form className='login_form'>
              <h1 className="login_title">Login</h1>
              <input type="text" className="input_email" placeholder='Email address' />
              <input type="text" className="input_pass" placeholder='Password' />
              <button className="login_account"><Link to="/movie">Login to your account</Link></button>
              <pre className="login_go">Don’t have an account?  <Link to="/sign" > Sign Up</Link></pre>
            </form>
        </div>
    </div>
  )
}

export default Login