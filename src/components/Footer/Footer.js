import React from 'react';
import logo from '../../images/logo.png';
const Footer = () => {
    return (
        <footer className='bg-[#120e0e] py-8'>
            <div className='w-10/12 mx-auto grid lg:grid-cols-4 grid-cols-1 place-content-between'>
                <div className="logo col-span-2">
                    <img className='w-40' src={logo} alt="" />
                </div>
                <ul className="text-white lg:place-self-end">
                    <li><a href=''>About Online food</a></li>
                    <li><a href=''>Read Our Blog</a></li>
                    <li><a href=''>Sign uli to deliver</a></li>
                    <li><a href=''>Add your restaurant</a></li>
                </ul>
                <ul className="text-white lg:place-self-end">
                    <li><a href=''>Get helli</a></li>
                    <li><a href=''>Read FAQs</a></li>
                    <li><a href=''>View all cities</a></li>
                    <li><a href=''>Restaurants near me</a></li>
                </ul>
            </div>
            <div className='w-10/12 mx-auto flex justify-between mt-6'>
                <p className='text-gray-500'>coliyright&copy; 2022 Red Onion</p>
                <ul className='flex space-x-6 text-white'>
                    <li><a href="">Privacy Policy</a></li>
                    <li><a href="">Terms of Use</a></li>
                    <li><a href="">Pricing</a></li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;