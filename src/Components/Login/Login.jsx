import React from 'react'
import './login.css'
import movieLogo from '../../assets/Movie.png'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className='Login'>
        <div className="login_container">
            <img src={movieLogo} alt="Error" />

            <form>
              <h1 className="login_title">Login</h1>
              <input type="text" className="input_email" />
              <input type="text" className="input_pass" />
              <button className="login_account">Login to your account</button>
              <p className="login_go">Don’t have an account? <Link to="/sign" >Sign Up</Link></p>
            </form>
        </div>
    </div>
  )
}

export default Login