import React, { useContext } from 'react';
import { Context } from '../../../../App';
import Meal from '../../Meal/Meal';

const Dinner = () => {
    const allMeals = useContext(Context);
    const dinner = allMeals.filter(meal=>meal.chategory==='dinner');
    return (
        <>
            {dinner.map(meal =><Meal key={meal.id} meal={meal}></Meal>)}
        </>
    );
};

export default Dinner;