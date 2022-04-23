import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const AddMeals = ({value,setValue}) => {
    const navigate = useNavigate();
    const mealNameRef = useRef('');
    const mealInfoRef = useRef('');
    const priceRef = useRef('');
    const chategoryRef = useRef('');
    const imgRef = useRef('');
    
    const handleAddMeal = (e) =>{
        e.preventDefault();
        const chategory = chategoryRef.current.value;
        const mealName = mealNameRef.current.value;
        const img = imgRef.current.value;
        const mealInfo = mealInfoRef.current.value;
        const price = priceRef.current.value;
        const meal = {chategory,mealName,img,mealInfo,price};
        console.log(meal);
        fetch('http://localhost:5000/meals',{
            method:'post',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(meal)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data?.acknowledged){
                setValue(!value);
                navigate('/');
            }
        })
    }
    return (
        <div className='grid place-items-center h-[600px]'>
            <div className='w-96'>
            <h2 className='text-center text-4xl uppercase text-gray-700 font-extrabold my-8'>Add New Meal</h2>
            <form action="" onSubmit={handleAddMeal}>
                <input ref={mealNameRef} className='p-2 outline-none bg-slate-200 my-4 w-full rounded-md block' type="text" name="name" placeholder='Enter Meal Name' required/>
                <input ref={imgRef} className='p-2 outline-none bg-slate-200 my-4 w-full rounded-md block' type="text" name="photoUrl" placeholder='Enter Meal photo url' required/>
                <select ref={chategoryRef} className='p-2 outline-none bg-slate-200 my-4 w-full rounded-md block' name="chategory">
                <option value="breakfast">Breakfast</option>
                <option value="lunch">Lunch</option>
                <option value="dinner">Dinner</option>
                </select>
                <input ref={priceRef} className='p-2 outline-none bg-slate-200 my-4 w-full rounded-md block' type="number" step='any' name="price" placeholder='enter price'/>
                <textarea ref={mealInfoRef} className='p-2 outline-none bg-slate-200 my-4 w-full rounded-md block' type="text" name="description" placeholder='Enter Meal description' required></textarea>
                <input className='p-2 outline-none bg-rose-600 text-white cursor-pointer my-4 w-full rounded-md' type="submit" value="Add Meal"/>
            </form>
            </div>
        </div>
    );
};

export default AddMeals;