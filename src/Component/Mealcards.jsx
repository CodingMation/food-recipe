import React from 'react';
import { NavLink } from 'react-router-dom';

const Mealcards = ({detail}) => {
    console.log(detail);
    if (!detail) return null;

  return (
    <div className="flex flex-wrap gap-6 justify-center">
      {detail.map((meal, index) => (
        <div key={index} 
        className="bg-white shadow-2xl rounded-xl p-4 space-y-4 overflow-hidden 
                    transition-transform hover:scale-105 duration-300"
        >
          <img src={meal.strMealThumb} alt={meal.strMeal} 
            className="w-full h-[300px] object-cover rounded" />
          <h2 className="text-lg font-bold mt-2">
            {meal.strMeal}
          </h2>
          <NavLink to={`/${meal.idMeal}`} >
            <button className='bg-[yellow] rounded-md px-2'>
                Recipe
            </button>
          </NavLink>
        </div>
      ))}
    </div>
  );

}

export default Mealcards;