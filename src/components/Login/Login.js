import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../images/logo2.png';
import { useAuthState, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
const Login = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    const [
        signInWithEmailAndPassword,
        User,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const handleLogin = async (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
        await signInWithEmailAndPassword(email, password);
    }
    if(user){
        navigate('/');
    }

    return (
        <div className='grid place-items-center h-[80vh]'>
            <div className='w-72'>
                <div className="logo mb-8">
                    <img className='w-48 mx-auto' src={logo} alt="" />
                </div>
                <form onSubmit={handleLogin} action="">
                    <input className='p-2 outline-none bg-slate-200 my-4 w-full rounded-md block' type="email" name="email" placeholder='email' required />
                    <input className='p-2 outline-none bg-slate-200 my-4 w-full rounded-md block' type="password" name="password" placeholder='password' required />
                    {error && <p className='text-rose-600'>
                        {error?.message}
                    </p>}
                    <button className='p-2 flex items-center justify-center outline-none bg-rose-600 text-white cursor-pointer my-4 w-full rounded-md' type="submit">
                    <div className={loading?"border-t-2 border-r-2 border-white rounded-full animate-spin h-6 w-6 mr-3":''}></div>
                        Login
                    </button>
                    
                </form>
                <p>Don't have an Account.?<Link className='text-teal-400' to='/signup'>Sign Up</Link></p>
            </div>
        </div>
    );
};

export default Login;