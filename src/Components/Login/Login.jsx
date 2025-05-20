import React, { useEffect, useState } from "react";
import "./login.css";
import "./media.css";
import movieLogo from "../../assets/Movie.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {

  const [loginmail, setLoginMail] = useState("");
  const [logincode, setLoginCode] = useState("");

  const navigate = useNavigate();

  const loginEmail = localStorage.getItem("email");
  const loginPass = localStorage.getItem("password");

  const handleLogin = () => {
    if(loginmail === loginEmail || logincode === loginPass) {
      navigate("/movie");
    } else {
      alert("Invalid email or password");
    }


    
  }

  return (
    <div className="login">
      <div className="login_container">
        <img src={movieLogo} alt="Error" />

        <form className="login_form">
          <h1 className="login_title">Login</h1>
          <input
            type="text"
            className="input_email"
            placeholder="Email address"
            onChange={(e) => setLoginMail(e.target.value)}
          />
          <input
            type="password"
            className="input_pass"
            placeholder="Password"
            onChange={(e) => setLoginCode(e.target.value)}
          />
          <button className="login_account"onClick={(e) => handleLogin()}>
            <a>Login to your account</a>
          </button>
          <pre className="login_go">
            Don’t have an account? <Link to="/sign"> Sign Up</Link>
          </pre>
        </form>
      </div>
    </div>
  );
}

export default Login;
