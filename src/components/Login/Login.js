import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo2.png';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
      const handleLogin = (e)=>{
        const email = e.target.email.value;
      }
    return (
        <div className='grid place-items-center h-[70vh]'>
            <div className='w-72'>
            <div className="logo mb-8">
                <img className='w-48 mx-auto' src={logo} alt="" />
            </div>
            <form onSubmit={handleLogin} action="">
                <input className='p-2 outline-none bg-slate-200 my-4 w-full rounded-md block' type="email" name="email" placeholder='email' required/>
                <input className='p-2 outline-none bg-slate-200 my-4 w-full rounded-md block' type="password" name="password" placeholder='password' required/>
                <input className='p-2 outline-none bg-rose-600 text-white cursor-pointer my-4 w-full rounded-md block' type="submit" value="Login" />
            </form>
            <p>Don't have an Account.?<Link className='text-teal-400' to='/signup'>Sign Up</Link></p>
            </div>
        </div>
    );
};

export default Login;