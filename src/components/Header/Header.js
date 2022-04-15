import React from 'react';
import logo from '../../images/logo2.png';
import CustomLink from '../CustomLink/CustomLink';
import { AiOutlineShoppingCart } from 'react-icons/ai';
const Header = () => {
    return (
        <header className='bg-white shadow-md'>
            <nav className='w-10/12 h-20 mx-auto flex justify-between items-center'>
                <div className="logo">
                    <img className='h-10' src={logo} alt="" />
                </div>
                <div className='flex items-center space-x-6 text-lg'>
                    <ul className='flex items-center space-x-6'>
                        <CustomLink to='/home'>Home</CustomLink>
                        <CustomLink to='/cart'><AiOutlineShoppingCart className='text-2xl'/></CustomLink>
                        <CustomLink to='/login'>Login</CustomLink>
                    </ul>
                    <button className='bg-rose-500 px-3 py-2 rounded-3xl text-white'>Sign Up</button>
                </div>
            </nav>
        </header>
    );
};

export default Header;