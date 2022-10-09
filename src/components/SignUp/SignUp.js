import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../images/logo2.png';
import { useAuthState, useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
const SignUp = () => {
    const navigate = useNavigate();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const [pageError, setPageError] = useState('');
    //const [user] = useAuthState(auth);
    const handleSubmit = async (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const confirmPassword = e.target.confirm_password.value;
        if (password === confirmPassword) {
            await createUserWithEmailAndPassword(email, password);
            await updateProfile({ displayName: name });
        } else {
            setPageError("confirm password isn't matching");
        }
    }
    if (user) {
        navigate('/');
    }
    return (
        <div className='grid place-items-center h-[80vh]'>
            <div className='w-72'>
                <div className="logo mb-8">
                    <img className='w-48 mx-auto' src={logo} alt="" />
                </div>
                <form onSubmit={handleSubmit} action="">
                    <input className='p-2 outline-none bg-slate-200 my-4 w-full rounded-md block' type="text" name="name" placeholder='name' required />
                    <input className='p-2 outline-none bg-slate-200 my-4 w-full rounded-md block' type="email" name="email" placeholder='email' required />
                    <input className='p-2 outline-none bg-slate-200 my-4 w-full rounded-md block' type="password" name="password" placeholder='password' required />
                    <input className='p-2 outline-none bg-slate-200 my-4 w-full rounded-md block' type="password" name="confirm_password" placeholder='confirm Password' required />
                    <p className='text-rose-600'>{error?.message}</p>
                    <p className='text-rose-600'>{pageError}</p>
                    <button className='p-2 flex items-center justify-center outline-none bg-rose-600 text-white cursor-pointer my-4 w-full rounded-md' type="submit">
                        <div className={loading?"border-t-2 border-r-2 border-white rounded-full animate-spin h-6 w-6 mr-3":''}></div>
                        <p>Sign Up</p>
                    </button>
                </form>
                <p>Already have an Account.?<Link className='text-teal-400' to='/login'>Login</Link></p>
            </div>
        </div>
    );
};

export default SignUp;