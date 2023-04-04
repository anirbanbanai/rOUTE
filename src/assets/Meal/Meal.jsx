import React from 'react';
import { Link } from 'react-router-dom';

const Meal = ({ main }) => {
    console.log(main);
    const { strCategory, strArea, strMealThumb, strMeal } = main;
    return (
        <div className='border-2 border-red-600 rounded-xl m-4'>
            <h1 className='text-3xl font-semibold'>{strMeal}</h1>
            <img className='w-[50%] mx-auto rounded-lg' src={strMealThumb} alt="" />
            <h3 className='text-2xl font-semibold'>Area : {strArea}</h3>
            <h2 className='font-semibold'>IntroDuction : {strCategory}</h2>
            
             <Link to='/showDetails'><button className='bg-blue-300 p-2 rounded-xl'>show more details</button></Link>
        </div>
    );
};

export default Meal;