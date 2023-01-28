import React from 'react';

const Register = () => {
    return (
        <div className='mx-auto w-80'>
            <h1 className='text-center mb-6 text-3xl font-bold text-cyan-500'>Hello there, Please Login</h1>
            <form>
                <input className='border w-full border-gray-800 p-2 m-2 rounded' placeholder='Enter Your Email' type="email" /> <br />
                <input className='border w-full border-gray-800 p-2 m-2 rounded' placeholder='Enter Your Password' type="password" /><br />
                <button className='m-2 px-10 py-2 w-full font-bold rounded bg-cyan-400 hover:bg-cyan-500 duration-500' type="submit">Login</button>
            </form>
        </div>
    );
};

export default Register;