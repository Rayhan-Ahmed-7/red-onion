import React, { useState } from 'react';
import logo from '../../images/logo2.png';
import CustomLink from '../CustomLink/CustomLink';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';
import { FaHamburger } from 'react-icons/fa';
const Header = () => {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth);
        navigate('/');
    }
    return (
        <header className='bg-white shadow-md'>
            <nav className='w-10/12 min-h-[80px] mx-auto flex justify-between items-center relative'>
                <Link to='/' className="logo">
                    <img className='h-10' src={logo} alt="" />
                </Link>
                <div onClick={() => setOpen(!open)} className='menu text-rose-500 text-2xl md:hidden visible'>
                    <FaHamburger />
                </div>
                <div className={` ${open ? 'block' : 'md:block hidden'} md:static absolute top-[85px] right-0 bg-white p-3 rounded-lg md:shadow-none shadow-lg`}>
                    <div className='flex md:flex-row items-center md:space-x-6 md:space-y-0 space-y-6 text-lg flex-col'>
                        <ul className='flex md:flex-row items-center justify-center space-x-0 md:space-x-6 md:space-y-0 space-y-2 flex-col'>
                            <CustomLink to='/'>Home</CustomLink>
                            <CustomLink to='/cart'><AiOutlineShoppingCart className='text-2xl' /></CustomLink>
                            {
                                user ?
                                    <>
                                        <CustomLink to='add-meal'>Add Meal</CustomLink>
                                        <CustomLink to='manage-meals'>Manage Meals</CustomLink>
                                    </>
                                    :
                                    <CustomLink to='/login'>Login</CustomLink>
                            }
                        </ul>
                        {user ?
                            <div className='flex md:flex-row flex-col items-center space-x-0 md:space-x-4'>
                                <h2>{user.displayName}</h2>
                                <img src={user.photoURL} alt="" />
                                <button onClick={() => handleSignOut()} className='bg-rose-500 px-3 py-2 rounded-3xl text-white'>Sign Out</button>
                            </div>
                            :
                            <button onClick={() => navigate('/signup')} className='bg-rose-500 px-3 py-2 rounded-3xl text-white'>Sign Up</button>
                        }
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;