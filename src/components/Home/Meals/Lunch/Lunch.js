import React, { useContext } from 'react';
import { Context } from '../../../../App';
import Meal from '../../Meal/Meal';

const Lunch = () => {
    const allMeals = useContext(Context);
    const lunch = allMeals.filter(meal=>meal.chategory==='lunch');
    return (
        <>
            {lunch.map(meal =><Meal key={meal.id} meal={meal}></Meal>)}
        </>
    );
};

export default Lunch;