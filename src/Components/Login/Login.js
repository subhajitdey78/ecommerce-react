import React, { useState } from "react";
import { signUp } from "../../api/auth";
import Navbar from "../Navbar/Navbar";
import "./Login.css";

function Login() {
  const [showSignup, setShowSignup] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [signupSuccess, setSignupSuccess] = useState(false);
  const [authMessage, setAuthMessage] = useState("");

  const toggleSignup = () => {
    setAuthMessage("");
    clearState();
    setShowSignup(!showSignup);
  };

  const signupHandler = async () => {
    console.log("working");
    if (!username || !password || !email) {
      setAuthMessage("All fields are required");
      return;
    }
    const user = { username, password, email };

    try {
      const response = await signUp(user);
      console.log(response);
      setAuthMessage();
      clearState();
      setShowSignup(true);
    } catch (error) {}
  };
  const signinHandler = async () => {};

  const clearState = () => {
    setShowSignup(false);
    setUsername("");
    setPassword("");
    setEmail("");
  };

  return (
    <>
      <Navbar />
      <div className="login">
        <div className="container">
          <div className="row">
            <div className="col">
              <h2 className="home-title text-center">
                Welcome to the InstaShop
              </h2>
              <div className="login-wrapper">
                <h4 className="text-center">
                  {" "}
                  {showSignup ? "Signup" : "Login"}{" "}
                </h4>
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="username"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className="input-group">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="input-group">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="input-group">
                  <input
                    type="submit"
                    className="form-control btn btn-primary"
                    value={showSignup ? "Sign Up" : "Log In"}
                    onClick={showSignup ? signupHandler : signinHandler}
                  />
                </div>
                <div onClick={toggleSignup} className="signup-btn">
                  {showSignup
                    ? "Already have and Account? Login"
                    : "Dont have an account? Sign up"}
                </div>
                <div
                  className={
                    signupSuccess
                      ? "text-info text-center"
                      : "text-danger text-center"
                  }
                >
                  {authMessage}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;