import React, { useState } from "react";
import "./Auth.css";
import Logo from "../../img/logo.png";
import { logIn, signUp } from "../../actions/AuthActions.js";
import { useDispatch, useSelector } from "react-redux";

const Auth = () => {
  const initialState = {
    firstname: "",
    lastname: "",
    username: "",
    password: "",
    confirmpass: "",
  };
  const [isSignUp, setIsSignUp] = useState(false);
  const dispatch = useDispatch();
  const loading = useSelector((state)=>state.authReducer.loading);
  const [data, setData] = useState(initialState);
  const [confirmPass, setConfirmPass] = useState(true);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const resetForm = () => {
    setData(initialState);
    setConfirmPass(confirmPass);
  };

  const handleSubmit = (e) => {
    setConfirmPass(true);
    e.preventDefault();
    if (isSignUp) {
      data.password === data.confirmpass ? dispatch(signUp(data)) : setConfirmPass(false);
    } else {
      dispatch(logIn(data));
    }
  };

  return (
    <div className={`Auth ${isSignUp ? "signupFor" : ""}`}>
      {/* left side */}

      <div className={`a-left ${isSignUp ? "signupFo" : ""}`}>
        <img src={Logo} alt="" />
        <div className="Webname">
          <h1>Coders Media</h1>
          <h6>Socialize, collaborate, and grow with a community of coders</h6>
        </div>
      </div>

      {/* right form side */}
      <div className="a-right">
        <form className={`infoForm authForm ${isSignUp ? "signupForm" : ""}`} onSubmit={handleSubmit} >
          <h3>{isSignUp ? "Sign Up" : "Log In"}</h3>
          {isSignUp && (
            <div>
              <input
                required
                type="text"
                placeholder="First Name"
                className="infoInput"
                name="firstname"
                value={data.firstname}
                onChange={handleChange}
              />
              <input
                type="text"
                placeholder="Last Name"
                className="infoInput"
                name="lastname"
                value={data.lastname}
                onChange={handleChange}
              />
            </div>
          )}
          <div>
            <input
              required
              type="text" 
              placeholder="Username"
              className="infoInput"
              name="username"
              value={data.username}
                onChange={handleChange}
            />
          </div>
          <div>
            <input
              required
              type="password"
              className="infoInput"
              placeholder="Password"
              name="password"
              value={data.password}
              onChange={handleChange}
            />
            {isSignUp && (
              <input
                required
                type="password"
                className="infoInput"
                name="confirmpass"
                placeholder="Confirm Password"
                value={data.confirmpass}
                onChange={handleChange}
              />
            )}
          </div>
          <span
            style={{
              color: "red",
              fontSize: "12px",
              alignSelf: "flex-end",
              marginRight: "5px",
              display: confirmPass ? "none" : "block",
            }}
          >
            *Confirm password is not same
          </span>
          <div>
            <span
              style={{
                fontSize: "12px",
                cursor: "pointer",
                textDecoration: "underline",
              }}
              onClick={() => {setIsSignUp((prev)=>!prev); resetForm()}}
            >
              {isSignUp ? "Already have an account Login" : "Don't have an account? Sign Up"}
            </span>
            <button className="button infoButton" type="Submit" disabled={loading}>
              {loading? "Loading..." : isSignUp ? "Signup" : "Login"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Auth;
