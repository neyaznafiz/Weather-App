import axios from 'axios';
import React from 'react'
import { useState } from 'react';

function Weather() {

    const API_KEY = `28dbbb2da2408990e0ca8bd6e44242a6`

    // state for store data from fetch
    const [weatherData, setWeatherData] = useState({})
    console.log(weatherData);
    const { name, main, weather, visibility, wind, sys } = weatherData
    const [loading, setLoading] = useState(false)

    const condition = weather?.[0]?.main

    // search by city function
    const searchTemperature = (event) => {
        event.preventDefault();
        setLoading(true)

        const city = event.target.city.value;

        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
            .then(res => {
                const { data } = res
                setWeatherData(data)
                setLoading(false)
            })
    }

    return (
        <div className="grid justify-center items-center h-[100vh]">
            {/* search section */}
            <div>
                <h1 className='text-white text-4xl text-center uppercase'>Search your city name </h1>
                <form onSubmit={searchTemperature} className="md-6 m-auto py-5">

                    <div className="flex gap-x-4 relative mb-3 mx-5 md:mx-0 lg:mx-0">
                        <input type="text" name='city' className="h-[48px] w-[80%] lg:w-[400px] md:w-[83%] rounded-full px-5 bg-black text-white outline-none border border-white" placeholder="Enter your location ..." ></input>

                        <div className="">
                            <input type="submit" value="Search" className="bg-white px-8 py-3 rounded-full absolute left- right-0 md:right-0 lg:right-0" />
                        </div>
                    </div>

                </form>
            </div>

            {/* data show section */}
            <div className='h-full'>
                {loading ?
                    <div className='mx-auto border-4 border-white border-t-0 animate-spin h-32 w-32 rounded-full' />
                    :
                    <div className="grid justify-center text-white -mt-6 lg:-mt-20 md:-mt-20">

                        <div className='grid justify-center'>

                            <img src="https://openweathermap.org/img/wn/02d@2x.png" alt="" className='mx-auto' />

                            {condition ?
                                <h1 className="text-xl text-center -mt-4">{condition}</h1>
                                :
                                <h1 className="text-xl text-center -mt-4">Condition</h1>
                            }

                            {name ?
                                <h1 className='text-5xl'>{name}</h1>
                                :
                                <h1 className='text-5xl'>Location</h1>
                            }
                        </div>

                        {/* temp info */}
                        <div>
                            <div className='flex justify-around w-96 border-b border-white my-4'>
                                <span>
                                    {main?.temp ?
                                        <h3 className='text-2xl text-center my-4'><span>{main?.temp}</span>&deg;c</h3>
                                        :
                                        <h3 className='text-2xl text-center my-2'><span>Temp</span>&deg;c</h3>
                                    }
                                </span>

                                <span>
                                    {visibility ?
                                        <h3 className='text-2xl text-center my-4'><span>{visibility}v</span></h3>
                                        :
                                        <h3 className='text-2xl text-center my-2'><span>Visibility</span></h3>
                                    }
                                </span>
                            </div>

                            {/* wind info */}
                            <p className='text-center text-xl mt-4'>Wind Info</p>
                            <div className='flex justify-around w-96 border-b border-white mb-4'>
                                <span>
                                    {wind ?
                                        <h3 className='text-2xl text-center my-4'>Speed: <span>{wind?.speed}</span></h3>
                                        :
                                        <h3 className='text-2xl text-center my-2'><span>Wind Speed</span></h3>
                                    }
                                </span>

                                <span>
                                    {wind ?
                                        <h3 className='text-2xl text-center my-4'>Deg: <span>{wind?.deg}</span>&deg;</h3>
                                        :
                                        <h3 className='text-2xl text-center my-2'><span>Wind deg</span></h3>
                                    }
                                </span>
                            </div>

                            {/* sunrise and sunset info */}
                            <p className='text-center text-xl mt-4'>Country: {sys?.country}</p>
                            <div className='flex justify-around w-96 border-b border-white mb-4'>
                                {/* here i get the time is by default 1663479596 from api, that's whay i can't convert it into hour. because ms count start after 1970, and the default time here is befor that.*/}
                                <span>
                                    <p className='text-center text-xl'>Sunrise</p>
                                    {sys ?
                                        <h3 className='text-2xl text-center my-4'><span>{sys?.sunrise}s</span></h3>
                                        :
                                        <h3 className='text-2xl text-center my-2'><span>Time</span></h3>
                                    }
                                </span>

                                <span>
                                    <p className='text-center text-xl'>Sunset</p>
                                    {sys ?
                                        <h3 className='text-2xl text-center my-4'><span>{sys?.sunset}s</span></h3>
                                        :
                                        <h3 className='text-2xl text-center my-2'><span>Time</span></h3>
                                    }
                                </span>
                            </div>

                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default Weather
