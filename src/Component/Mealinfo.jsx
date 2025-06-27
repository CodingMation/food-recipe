import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const Mealinfo = () => {
    const {mealid} = useParams();
    const [info, setInfo] = useState();
    // console.log(mealid);
    const getInfo = async () => {
        const get = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}
`);
        const jsonData = await get.json();
        setInfo(jsonData.meals[0]);
    }
    if(info != ""){
        getInfo();
    }
    // console.log(info);

    if (!info) return "Data not found!";
  return (
    <>
        <div className='flex flex-col md:flex-row items-center max-w-full px-10 py-10 gap-10'>
            <img src={info.strMealThumb} alt="" 
            className='w-[50%] md:w-1/3 rounded-lg transition-transform hover:scale-[1.3] md:hover:scale-105' />
            <div className='w-full md:w-1/2 space-y-4'>
                <h1 className='text-3xl font-bold'>Recipe Detail</h1>
                <a href={info.strYoutube} target="_blank" className=''>
                    <button className='bg-[yellow] hover:bg-[gold] px-2 py-1 rounded-md '>
                        {info.strMeal}
                    </button>
                </a>
                <h3 className='font-semibold'>Instruction's</h3>
                <p>{info.strInstructions}</p>
            </div>
        </div>
    </>
  );

}

export default Mealinfo;