import React from 'react'

function Weather() {

    const searchTemperature = () => {

    }

    return (
        <div>
            <div className="grid justify-center items-center h-[100vh]">

                <div>
                    <form className="md-6 m-auto py-5">

                        <div className="flex gap-x-4 relative mb-3">
                            <input id="city" type="text" className="h-[49px] w-[400px] rounded-full px-5 bg-black text-w]" placeholder="Enter your location ..." />
                            <div className="">
                                <button onclick="searchTemperature()" type="button" className="bg-white px-8 py-3 rounded-full absolute right-0">Search</button>
                            </div>
                        </div>

                    </form>
                </div>


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
