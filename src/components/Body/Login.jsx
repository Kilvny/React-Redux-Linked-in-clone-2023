import {createUserWithEmailAndPassword ,signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
// import { getAuth } from 'https://www.gstatic.com/firebasejs/9.0.2/firebase-auth.js';
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { validateInputs } from '../../helpers/formValidator';
import "../../assets/login.css";
import { login } from "../../features/userSlice";
import { app, auth } from "../../firebase";
import swal from 'sweetalert';
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [job, setJob] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const dispatch = useDispatch();

  
  const firstNameInput = document.querySelector('#firstname')
  const passwordInput = document.querySelector('#password')
  const emailInput = document.querySelector('#email')
//   let errorCount = [0,0,0,0]

  const signIn = (e) => {
    e.preventDefault();
    // auth
    if(!email){
        return swal({
            title:'Login Error!',
            text:"Enter registered credentials then click on the Sign in word to login to your account",
            icon:'warning',
            buttons:false,
            timer: 10000
        })
    }
    signInWithEmailAndPassword(auth,email,password).then(userAuth => {
        dispatch(
            login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: firstName+' '+lastName,
                photoUrl: profilePic,
                job: job,
            })
        )
    })
    .catch((error) => {
        if (error.message === 'Firebase: Error (auth/user-not-found).'){
            swal({
                title:'Login Error!',
                text:`This user doesn't exist`,
                icon:'warning',
                buttons:false,
                timer: 10000
            })
        }
        else if (error.message === 'Firebase: Error (auth/wrong-password).'){
            swal({
                title:'Login Error!',
                text:`Wrong Password`,
                icon:'warning',
                buttons:false,
                timer: 10000
            })
        } else 
        {
            swal({
                title:'Login Error!',
                text:`${error.message}`,
                icon:'warning',
                buttons:false,
                timer: 10000
            })
        }
    })
  };

  const register = (e) => {
    e.preventDefault()

   
    

    if (!email || !password ) {
        return swal({
            title:'Registration Error!',
            text:"Enter credentials (email & password) are mandatory ",
            icon:'warning',
            buttons:false,
            timer: 10000
        })
    }
    let checkValidationStatus = validateInputs(firstNameInput,passwordInput,emailInput)
    console.log(checkValidationStatus)
    if (validateInputs(firstNameInput,passwordInput,emailInput)){
        
        createUserWithEmailAndPassword(auth, email, password)
          .then((userAuth) => {
            dispatch(
              login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: firstName + " " + lastName,
                photoUrl: profilePic,
                job: job,
              })
            );
          })
          .then((userAuth) => {
            updateProfile({
              displayName: firstName + " " + lastName,
              photoUrl: profilePic,
              job: job,
            }).then(() => {
              signIn();
            });
          })
          .catch((err) => {
            return swal({
                title:'Registeration Error!',
                text:`Probably email is already registered (try to click on sign in) ${err.message} `,
                icon:'warning',
                buttons:false,
                timer: 10000
            });;
          });

    }    


  }
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
            className='input-control'
          >
            <p>Email</p>
            <input type="Email" id='email'/>
            <div class="error"></div>
          </label>
          <label
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            htmlFor="Password"
            className='input-control'
          >
            <p>Password</p>
            <input type="password" id='password' />
            <div class="error"></div>
          </label>
          <label value={profilePic} onChange={(e) => setProfilePic(e.target.value)} htmlFor="Image URL">
            <p>Image URL</p>
            <input type="link " placeholder='kindly enter an image link address' />
            <div class="error"></div>
          </label>
          <label
            value={job}
            onChange={(e) => setJob(e.target.value)}
            htmlFor="Job"
          >
            <p>Job</p>
            <input type="text" />
            <div class="error"></div>
          </label>
          <label
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            htmlFor="first-Name"
            className='input-control'

          >
            <p>First-Name</p>
            <input type="text" id='firstname' />
            <div class="error"></div>
          </label>
          <label
            v
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            htmlFor="Name"
          >
            <p>Last-Name</p>
            <div class="error"></div>
            <input type="text" />
          </label>
          <label htmlFor="terms">
            <p className="terms">
              By clicking Agree & Join, you agree to the LinkedIn{" "}
              <a href="#">User Agreement</a>, <a href="#">Privacy Policy</a>,
              and <a href="#">Cookie Policy</a>.
            </p>
          </label>
          <button onClick={register}>Agree & Join</button>
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
