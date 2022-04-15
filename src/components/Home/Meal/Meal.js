import React from 'react';

const Meal = ({meal}) => {
    const {mealName,img,price,mealInfo} = meal;
    return (
        <div className='p-10'>
            <div className='bg-white p-6 text-center hover:shadow-2xl transition duration-300 rounded-lg'>
            <img className='w-52 mx-auto' src={img} alt="" />
            <h2 className='text-xl mt-2 text-gray-900'>{mealName}</h2>
            <p className='text-gray-600 mt-2'>{mealInfo}</p>
            <p className='mt-2'>${price}</p>
            <button className='p-2 bg-rose-600 text-white rounded-md uppercase mt-2'>Add to cart</button>
            </div>
        </div>
    );
};

export default Meal;