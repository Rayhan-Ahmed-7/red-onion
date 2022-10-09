import React from 'react';
import { Outlet } from 'react-router-dom';
import MealCustomLink from './MealCustomLink/MealCustomLink';
import './Meals.css';

const Meals = () => {
    return (
        <div className='w-10/12 my-20 mx-auto'>
            <div className='flex justify-center space-x-8 text-lg font-medium text-gray-900'>
                <MealCustomLink to={'/'}>Breakfast</MealCustomLink>
                <MealCustomLink to='lunch'>Lunch</MealCustomLink>
                <MealCustomLink to='dinner'>Dinner</MealCustomLink>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-16'>
                <Outlet></Outlet>
            </div>
            <button className='bg-rose-500 p-2 text-white rounded-md block mx-auto mt-4'>Checkout Your Food</button>
        </div>
    );
};

export default Meals;