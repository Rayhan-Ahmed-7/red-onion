import React from 'react';
import { Link } from 'react-router-dom';


const Meals = () => {
    return (
        <div className='mt-20'>
            <div className='flex justify-center space-x-8 text-lg font-medium text-gray-900'>
                <Link to=''>Breakfast</Link>
                <Link to=''>Lunch</Link>
                <Link to=''>Dinner</Link>
            </div>
            {}
        </div>
    );
};

export default Meals;