import React, { useContext } from 'react';
import { Context } from '../../App';
import { FaEdit, FaTrash } from 'react-icons/fa';

const ManageMeals = ({ value, setValue }) => {
    const meals = useContext(Context);
    const handleDeleteMeal = (id) => {
        const url = `http://localhost:5000/meals/${id}`;
        const proccede = window.confirm("Are you sure about this.?");
        if (proccede) {
            fetch(url, {
                method: 'delete',
            })
                .then(res => res.json())
                .then(data => {
                    if (data?.deletedCount > 0) {
                        setValue(!value);
                    }
                })
        }
    }
    return (
        <div className='grid place-items-center my-10'>
            <div className='w-8/12'>
                <h2 className='text-center text-4xl uppercase text-gray-700 font-extrabold my-8'>Manage Meals</h2>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
                    {meals.map(meal => <div key={meal._id} className='flex items-center justify-between flex-col rounded-lg shadow-lg p-4'>
                        <img className='w-30 h-30 rounded-full' src={meal.img} alt="" />
                        <h2 className='text-xl'>{meal.mealName}</h2>
                        <div className='flex justify-between w-[100%] mt-5'>
                            <button onClick={() => handleDeleteMeal(meal._id)} className='text-2xl bg-rose-500 text-white w-10 h-10 grid place-items-center rounded-full'><FaTrash /></button>
                            <button onClick={() => handleDeleteMeal(meal._id)} className='text-2xl bg-rose-500 text-white w-10 h-10 grid place-items-center rounded-full'><FaEdit /></button>
                        </div>
                    </div>)}
                </div>
            </div>
        </div>
    );
};

export default ManageMeals;