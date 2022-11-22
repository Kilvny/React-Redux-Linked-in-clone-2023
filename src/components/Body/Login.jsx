import React, { useState } from "react";
import "../../assets/login.css";
import { auth } from "../../firebase";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [job, setJob] = useState("");
  const [profilePic, setProfilePic] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    // auth
  };
  return (
    <div className="login-page">
      <img
        className="login-logo"
        src="https://i.ibb.co/5BG3mpB/Linkedin-Logo-PNG5.png"
        alt="Linkedin-Logo-PNG5"
      ></img>
      <h3 className="login-title">Make the most of your professional life</h3>
      <div className="login-form">
        <form>
          <label
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            htmlFor="Email"
          >
            <p>Email</p>
            <input type="Email" />
          </label>
          <label
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            htmlFor="Password"
          >
            <p>Password</p>
            <input type="password" />
          </label>
          <label value={profilePic} onChange={(e) => setProfilePic(e.target.value)} htmlFor="Image URL">
            <p>Image URL</p>
            <input type="link " />
          </label>
          <label
            value={job}
            onChange={(e) => setJob(e.target.value)}
            htmlFor="Job"
          >
            <p>Job</p>
            <input type="text" />
          </label>
          <label
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            htmlFor="first-Name"
          >
            <p>First-Name</p>
            <input type="text" />
          </label>
          <label
            v
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            htmlFor="Name"
          >
            <p>Last-Name</p>
            <input type="text" />
          </label>
          <label htmlFor="terms">
            <p className="terms">
              By clicking Agree & Join, you agree to the LinkedIn{" "}
              <a href="#">User Agreement</a>, <a href="#">Privacy Policy</a>,
              and <a href="#">Cookie Policy</a>.
            </p>
          </label>
          <button type="submit">Agree & Join</button>
          <p className="sign-in">
            Already on LinkedIn?{" "}
            <a href="#" onClick={signIn}>
              Sign in
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
