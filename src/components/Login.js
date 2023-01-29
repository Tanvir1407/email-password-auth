import React from "react";
import { createUserWithEmailAndPassword, getAuth, sendEmailVerification, updateProfile } from "firebase/auth";
import { useState } from "react";
import app from "../Firebase/firebase.init";
import { Link } from "react-router-dom";

const auth = getAuth(app);

const Login = () => {
  
  const [check, setCheck] = useState(false);
  const [passwordError, setPasswordError] = useState(['']);
  const [success, setSuccess] = useState(false); 
  const [submitError, setSubmitError] = useState(['']);

  
  
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const name = form.name.value;
    const password = form.password.value;
    
    if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
      setPasswordError('Please, add two uppercase letter');
      return;
    }
    if (!/(?=.*[!@#$&*])/.test(password)) {
      setPasswordError('Please, add one spacial chracters');
      return;
    }
    if (!/(?=.*[0-9].*[0-9])/.test(password)) {
      setPasswordError('Please, add two digit');
      return
    }
    setPasswordError('');
      createUserWithEmailAndPassword(auth, email, password)
          .then(result => {
            console.log(result);
            setSuccess(true);
            setSubmitError('')
            form.reset();
            EmailVerification();
            handleUpdateUserName(name);
          })
          .catch(err => {
            setSubmitError(err.message);
          })
    
    setTimeout(() => {
      setSuccess(false)
    }, 6000);

  };
  
  const checkboxHandle = (e) => {
    setCheck(e.target.checked);
  };

  const EmailVerification = () => {
    sendEmailVerification(auth.currentUser)
      .then(() => {
      alert("Please, Check your email and verify")
    })
  }
  // Update User Name
  const handleUpdateUserName = (name) => {
    updateProfile(auth.currentUser, {
      displayName: name
    })
      .then(() => {
        console.log('User Name Update');
      })
      .catch((err) => {
        console.log(err)
    })
  }


  return (
    <div className="mx-auto w-80">
      <form onSubmit={handleRegister}>
        <h1 className="text-3xl text-cyan-500 font-semibold my-4">
          Please Register..!!!
        </h1>
        
        <input
          className="my-3 border-2 min-w-full border-gray-500 rounded p-2 m-1"
          type="text"
          placeholder="Enter Your Name"
          name="name"
          id=""
          required
        />
        <input
          className="my-3 border-2 min-w-full border-gray-500 rounded p-2 m-1"
          type="email"
          placeholder="Enter Your Email"
          name="email"
          id=""
          required
        />
        

        <br />
        <input
          className="my-3  border-2 min-w-full border-gray-500 rounded p-2 m-1"
          type="password"
          placeholder="Enter your Password"
          name="password"
          id=""
          required  
        />
      
        <br />
        <label className="m-2" htmlFor="check">
          <input onClick={checkboxHandle} type="checkbox" name="check" id="" />{" "}
          I accept{" "}
          <a href="#" className="text-blue-500">
            Terms and Conditions
          </a>{" "}
          <br />
        </label>
        {check  ? (
          <button
            className="my-2  bg-green-400 px-12 min-w-full font-bold hover:bg-green-600 text-white duration-500 rounded-md py-2 "
            type="submit"
          >
            Registration
          </button>
        ) : (
          <button
            className=" my-2 text-gray-500  bg-gray-300 px-12 min-w-full font-bold duration-500 rounded-md py-2"
            type="submit"
            disabled
          >
            Registration
          </button>
        )}
      </form>
      <p>Already have an Account, Please <Link className='underline text-blue-400' to="/login">Login</Link></p>
      {
          success ? <p className="text-green-400">Form Submit Successfully</p> : ""
      }
      <p className="text-red-500">{passwordError}</p>
      <p className="text-red-500"> {submitError }</p> 
    </div>
  );
};

export default Login;
