import React, { useContext } from 'react';
import { Context } from '../../../../App';
import Meal from '../../Meal/Meal';

const Breakfast = () => {
    const allMeals = useContext(Context);
    const breakfast = allMeals.filter(meal=>meal.chategory==='breakfast');
    return (
        <>
            {breakfast.map(meal =><Meal key={meal.id} meal={meal}></Meal>)}
        </>
    );
};

export default Breakfast;