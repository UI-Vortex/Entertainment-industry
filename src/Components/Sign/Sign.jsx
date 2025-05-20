import "./sign.css";
import "./media.css";
import movieLogo from "../../assets/Movie.png";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Sign() {

  const [signEmail, setSignEmail] = useState("");
  const [signPass, setSignPass] = useState("");
  const [signPass2, setSignPass2] = useState("");

  const navigate = useNavigate();

  const handleSignClick = () => {

    localStorage.setItem("email", signEmail);
    localStorage.setItem("password", signPass);
    localStorage.setItem("password2", signPass2);

    navigate("/movie");
  }

  return (
    <div>
      <div className="register">
        <div className="regis_container">
          <img src={movieLogo} alt="Error" />

          <form className="regis_form">
            <h1 className="regis_title">Sign Up</h1>
            <input
              type="text"
              className="input_email"
              placeholder="Email address"
              onChange={(e) => setSignEmail(e.target.value)}
            />
            <input
              type="password"
              className="input_pass"
              placeholder="Password"
              onChange={(e) => setSignPass(e.target.value)}
            />

            <input
              type="password"
              className="input_pass2"
              placeholder="Password"
              onChange={(e) => setSignPass2(e.target.value)}
            />

            <button className="regis_account" onClick={(e) => handleSignClick()}>
              <Link to="/movie">Create an account</Link>
            </button>
            <pre className="regis_go">
              Already have an account? <Link to="/"> Login</Link>
            </pre>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Sign;
