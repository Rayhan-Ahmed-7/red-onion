import React from 'react';
import logo from '../../images/logo2.png';
import CustomLink from '../CustomLink/CustomLink';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';
const Header = () => {
    const navigate = useNavigate();
    const [user] = useAuthState(auth);
    console.log(user);
    const handleSignOut = ()=>{
        signOut(auth);
    }
    return (
        <header className='bg-white shadow-md'>
            <nav className='w-10/12 h-20 mx-auto flex justify-between items-center'>
                <Link to='/' className="logo">
                    <img className='h-10' src={logo} alt="" />
                </Link>
                <div className='flex items-center space-x-6 text-lg'>
                    <ul className='flex items-center space-x-6'>
                        <CustomLink to='/'>Home</CustomLink>
                        <CustomLink to='/cart'><AiOutlineShoppingCart className='text-2xl'/></CustomLink>
                        {
                            user?
                            ''
                            :
                            <CustomLink to='/login'>Login</CustomLink>
                        }
                    </ul>
                    {user?
                    <div className='flex items-center space-x-4'>
                        <h2>{user.displayName}</h2>
                        {/* <img src={user?.photoURL} alt="" /> */}
                        <button onClick={()=>handleSignOut()} className='bg-rose-500 px-3 py-2 rounded-3xl text-white'>Sign Out</button>
                    </div>
                    :
                    <button onClick={()=>navigate('/signup')} className='bg-rose-500 px-3 py-2 rounded-3xl text-white'>Sign Up</button>
                    }
                </div>
            </nav>
        </header>
    );
};

export default Header;