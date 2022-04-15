import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useMeals from '../../../Hooks/useMeals';
import Meal from '../Meal/Meal';

const Meals = () => {
    const [allMeals] = useMeals();
    const breakfast = allMeals.filter(meal=>meal.chategory==='breakfast');
    const lunch = allMeals.filter(meal=>meal.chategory==='lunch');
    const dinner = allMeals.filter(meal=>meal.chategory==='dinner');
    const [meals,setMeals] = useState(breakfast);
    const handleBreakfast = ()=>{

    }
    return (
        <div className='w-10/12 my-20 mx-auto'>
            <div className='flex justify-center space-x-8 text-lg font-medium text-gray-900'>
                <Link onClick={()=>setMeals(breakfast)} to=''>Breakfast</Link>
                <Link onClick={()=>setMeals(lunch)} to=''>Lunch</Link>
                <Link onClick={()=>setMeals(dinner)} to=''>Dinner</Link>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {meals.map(meal =><Meal key={meal.id} meal={meal}></Meal>)}
            </div>
        </div>
    );
};

export default Meals;