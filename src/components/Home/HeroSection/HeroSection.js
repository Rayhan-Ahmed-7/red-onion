import React from 'react';
import './HeroSection.css';
const HeroSection = () => {
    return (
        <div className="hero-section">
            <div className='lg:w-4/12 w-10/12 pt-40 mx-auto'>
            <h2 className='font-extrabold lg:text-6xl text-3xl text-gray-800'>Best Foods waiting for You..</h2>
            <div className='bg-white rounded-3xl flex mt-8'>
                <input className='p-3 flex-1 rounded-l-3xl outline-none' type="text" name="search"/>
                <button className='px-6 py-2 bg-rose-500 rounded-3xl text-white'>Search</button>
            </div>
            </div>
        </div>
    );
};

export default HeroSection;