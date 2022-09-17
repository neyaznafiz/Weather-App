import axios from 'axios';
import React from 'react'
import { useState } from 'react';

function Weather() {

    const API_KEY = `28dbbb2da2408990e0ca8bd6e44242a6`

    // state for store data from fetch
    const [weatherData, setWeatherData] = useState({})
    console.log(weatherData);

    // search by city function
    const searchTemperature = (event) => {
        event.preventDefault();

        const city = event.target.city.value;

        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
            .then(res => {
                const { data } = res
                // console.log(data);
                setWeatherData(data)
            })
    }

    return (
        <div>
            <div className="grid justify-center items-center h-[100vh]">

                {/* search section */}
                <div>
                    <form onSubmit={searchTemperature} className="md-6 m-auto py-5">

                        <div className="flex gap-x-4 relative mb-3">
                            <input type="text" name='city' className="h-[49px] w-[400px] rounded-full px-5 bg-black text-w]" placeholder="Enter your location ..." ></input>

                            <div className="">
                                <input type="submit" value="Search" className="bg-white px-8 py-3 rounded-full absolute right-0" />
                                {/* <button   type="button" >Search</button> */}
                            </div>
                        </div>

                    </form>
                </div>

                {/* data show section */}
                <div className="grid justify-center text-white text-center -mt-96">
                    <div className='flex justify-center'>
                        <img id="weather-icon" src="https://openweathermap.org/img/wn/02d@2x.png" alt="" />
                    </div>

                    <h1 className='text-5xl'>Dhaka</h1>
                    <div className='flex justify-around items-center w-52'>
                        <h3 className='text-2xl'><span>38.06</span>&deg;C</h3>
                        <h1 className="text-xl">Clouds</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Weather
