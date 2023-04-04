import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Meal from '../Meal/Meal';

const MealDb = () => {
    const meals = useLoaderData();
    console.log(meals.meals)
    return (
        <div>
            <h2>My Meal db</h2>
            <div className='grid md:grid-cols-3'>
                {
                    meals.meals.map(m=><Meal
                    key={m.idMeal}
                    main={m}
                    ></Meal>)
                }
            </div>
        </div>
    );
};

export default MealDb;