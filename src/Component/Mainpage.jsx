import React, { useState } from 'react'
import Mealcards from './Mealcards';

const Mainpage = () => {

    const [data, setData] = useState();
    const [search, setSearch] = useState("");
    const [msg, setMsg] = useState("");

    const handleInput = (e) => {
        setSearch(e.target.value);
    }
const myFun = async () => {
    if (search.trim() === "") {
        setMsg("Please enter something!");
        setData(null);
    } else {
        const get = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
        const jsonData = await get.json();

        if (jsonData.meals === null) {
            setMsg("No results found. Try searching something else!");
            setData(null);
        } else {
            setData(jsonData.meals);
            setMsg("");
        }
    }
};

    // console.log(data);

    return(
        <>
            <h1 className='text-center font-bold text-3xl'>FOOD RECIPE WEB APP</h1>
            <div className='max-w-full flex flex-col py-10'>
                <div className="flex w-full max-w-screen-md gap-2 mx-auto">
                    <input
                        type="text"
                        placeholder="Enter Your Dishes"
                        className="bg-[lightgray] px-2 py-2 rounded-md w-full flex-1"
                        onChange={handleInput}
                    />
                    <button
                        onClick={myFun}
                        className="bg-[blueviolet] 
                        text-white font-semibold px-4 py-2 rounded-md whitespace-nowrap"
                    >
                        Search
                    </button>
                </div>
                <div className='max-w-full flex flex-wrap gap-4 justify-center px-10 py-10'>
                    <Mealcards detail = {data} />
                </div>
                <h4 className='text-center my-14 py-14 text-3xl'>{msg}</h4>
            </div>
        </>
    )
}

export default Mainpage