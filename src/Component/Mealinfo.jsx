import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Mealinfo = () => {
    const { mealid } = useParams();
    const [info, setInfo] = useState(null);

    useEffect(() => {
        const getInfo = async () => {
            try {
                const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`);
                const data = await res.json();
                setInfo(data.meals?.[0]); // using optional chaining for safety
            } catch (error) {
                console.error("Error fetching meal data:", error);
            }
        };

        getInfo();
    }, [mealid]); // only run once when mealid changes

    if (!info) return <p className="text-center mt-10">Loading or data not found!</p>;

    return (
        <div className='flex flex-col md:flex-row items-center max-w-full px-10 py-10 gap-10'>
            <img
                src={info.strMealThumb}
                alt={info.strMeal}
                className='w-[50%] md:w-1/3 rounded-lg transition-transform hover:scale-[1.3] md:hover:scale-105'
            />
            <div className='w-full md:w-1/2 space-y-4'>
                <h1 className='text-3xl font-bold'>Recipe Detail</h1>
                <a href={info.strYoutube} target="_blank" rel="noreferrer">
                    <button className='bg-[yellow] hover:bg-[gold] px-2 py-1 rounded-md'>
                        {info.strMeal}
                    </button>
                </a>
                <h3 className='font-semibold'>Instruction's</h3>
                <p>{info.strInstructions}</p>
            </div>
        </div>
    );
};

export default Mealinfo;
