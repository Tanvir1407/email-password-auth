import "./App.css";
import { getAuth } from "firebase/auth";
import app from "./Firebase/firebase.init";
import { useState } from "react";

const auth = getAuth(app);

function App() {
  const [check, setCheck] = useState(false);
  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    e.target.email.value = "";
    e.target.password.value = "";
  };

  const checkboxHandle = (e) => {
    setCheck(e.target.checked);
  };
  return (
    <div className="mx-auto w-1/3">
      <form onSubmit={handleRegister}>
        <input
          className="border-2 border-red-500 rounded p-1 m-1"
          type="email"
          placeholder="Enter Your Email"
          name="email"
          id=""
        />{" "}
        <br />
        <input
          className="border-2 border-red-500 rounded p-1 m-1"
          type="password"
          placeholder="Enter your Password"
          name="password"
          id=""
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
        {check ?<button
          className="bg-gray-400 px-14 hover:bg-slate-900 hover:text-white duration-500 rounded-md py-2 "
          type="submit"
        >
          Registration
        </button> : <button
          className="bg-gray-400 px-14  duration-500 rounded-md py-2"
            type="submit"
            disabled
        >
          Registration
        </button>}
      </form>
    </div>
  );
}

export default App;
