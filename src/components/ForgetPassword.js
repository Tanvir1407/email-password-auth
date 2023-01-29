import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import React, { useState } from 'react';
import app from '../Firebase/firebase.init';

const auth = getAuth(app);
const ForgetPassword = () => {
    const [error, setError] = useState('');

    const handleForgetPassword = (e) => {
    e.preventDefault()
    const Email = e.target.email.value;
        if (Email) {
            sendPasswordResetEmail(auth, Email)
            .then(result => {
                
            })
            .catch(err => {
                console.log(err.message)
            }) 
            setError(<p className='text-green-400'> Password Reset link Successfully Send</p>)
            e.target.reset()
        }
        else {
            setError(<p className='text-red-400'>Enter Your  Mail </p>)
        }
    }
    
    return (
        <div className='mx-auto w-80'>
            <h1 className='text-center mb-6 text-3xl font-semibold text-cyan-500'>Reset Your Password</h1>
            <form onSubmit={handleForgetPassword} className='p-3 rounded-md '>
                <input name="email" className='border w-full border-gray-800 p-2 my-2 rounded' placeholder='Enter Your Email' type="email" /> <br />
                <p>{error}</p>
                <button className='my-2 px-10 py-2 w-full font-bold rounded bg-cyan-400 hover:bg-cyan-500 duration-500' type="submit">Reset</button>
                
            </form>
        </div>
    );
};

export default ForgetPassword;