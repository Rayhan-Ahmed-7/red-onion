import React, { useContext } from 'react';
import { Context } from '../../App';
import { FaTrash } from 'react-icons/fa';

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
                if (data?.deletedCount>0) {
                    setValue(!value);
                }
            })
        }
    }
    return (
        <div className='grid place-items-center'>
            <div className='w-[500px]'>
                <h2 className='text-center text-4xl uppercase text-gray-700 font-extrabold my-8'>Manage Meals</h2>
                {meals.map(meal => <div key={meal._id} className='flex justify-between items-center my-8 space-x-4'>
                    <img className='w-20 h-20 rounded-full' src={meal.img} alt="" />
                    <h2 className='text-2xl'>{meal.mealName}</h2>
                    <button onClick={() => handleDeleteMeal(meal._id)} className='text-2xl bg-rose-500 text-white p-4 rounded-full'><FaTrash /></button>
                </div>)}
            </div>
        </div>
    );
};

export default ManageMeals;