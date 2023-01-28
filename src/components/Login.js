import React from "react";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { useState } from "react";
import app from "../Firebase/firebase.init";

const auth = getAuth(app);

const Login = () => {

  const [check, setCheck] = useState(false);
  const [passwordError, setPasswordError] = useState(['']);

  const handleRegister = (e) => {
      e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
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
          })
          .catch(err => {
              console.log(err);
          })

    e.target.email.value = "";
    e.target.password.value = "";
  };
  
  const checkboxHandle = (e) => {
    setCheck(e.target.checked);
  };
  return (
    <div className="mx-auto w-1/3">
      <form onSubmit={handleRegister}>
        <h1 className="text-3xl text-cyan-500 font-semibold my-4">
          Please Register..!!!
        </h1>
        <input
          className="my-3 border-2 min-w-full border-gray-500 rounded p-2 m-1"
          type="email"
          placeholder="Enter Your Email"
          name="email"
          id=""
          required
        />{" "}
        <br />
        <input
          className="my-3  border-2 min-w-full border-gray-500 rounded p-2 m-1"
          type="password"
          placeholder="Enter your Password"
          name="password"
          id=""
          required  
        />
        <p className="text-red-300">{passwordError }</p>
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
            className="my-3   bg-green-400 px-12 min-w-full font-bold hover:bg-green-600 text-white duration-500 rounded-md py-2 "
            type="submit"
          >
            Registration
          </button>
        ) : (
          <button
            className=" my-3 text-gray-500  bg-gray-300 px-12 min-w-full font-bold duration-500 rounded-md py-2"
            type="submit"
            disabled
          >
            Registration
          </button>
        )}
      </form>
    </div>
  );
};

export default Login;
