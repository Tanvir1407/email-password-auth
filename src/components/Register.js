import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import app from '../Firebase/firebase.init';

const auth = getAuth(app);
const Register = () => {
    const [loginSuccess, setSuccess] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        setSuccess(false);
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result)
                setSuccess(true);
            })
            .catch(error => {
            console.log(error)
            })
        form.reset();
        setTimeout(() => {
            setSuccess(false)
        },3000)
    }
    return (
        <div className='mx-auto w-80'>
            <h1 className='text-center mb-6 text-3xl font-semibold text-cyan-500'>Hello there, Please Login</h1>
            <form onSubmit={handleSubmit} className={`p-3 rounded-md ${loginSuccess ? "bg-green-300": "bg-slate-100"} duration-500`}>
                <input name="email" className='border w-full border-gray-800 p-2 my-2 rounded' placeholder='Enter Your Email' type="email" /> <br />
                <input name="password" className='border w-full border-gray-800 p-2 my-2 rounded' placeholder='Enter Your Password' type="password" /><br />
                <button className='my-2 px-10 py-2 w-full font-bold rounded bg-cyan-400 hover:bg-cyan-500 duration-500' type="submit">Login</button>
            </form>
            <p className='mx-2 text-gray-500'>New to Website, Please <Link className=' underline text-blue-400' to="/register">Register </Link></p>
        </div>
    );
};

export default Register;