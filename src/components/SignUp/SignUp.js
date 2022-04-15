import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo2.png';
const SignUp = () => {
    return (
        <div className='grid place-items-center h-[70vh]'>
            <div className='w-72'>
            <div className="logo mb-8">
                <img className='w-48 mx-auto' src={logo} alt="" />
            </div>
            <form action="">
                <input className='p-2 outline-none bg-slate-200 my-4 w-full rounded-md block' type="text" name="name" placeholder='name' required/>
                <input className='p-2 outline-none bg-slate-200 my-4 w-full rounded-md block' type="email" name="email" placeholder='email' required/>
                <input className='p-2 outline-none bg-slate-200 my-4 w-full rounded-md block' type="password" name="password" placeholder='password' required/>
                <input className='p-2 outline-none bg-slate-200 my-4 w-full rounded-md block' type="password" name="confirm-password" placeholder='confirm Password' required/>
                <input className='p-2 outline-none bg-rose-600 text-white cursor-pointer my-4 w-full rounded-md block' type="submit" value="Sign up" />
            </form>
            <p>Already have an Account.?<Link className='text-teal-400' to='/login'>Login</Link></p>
            </div>
        </div>
    );
};

export default SignUp;