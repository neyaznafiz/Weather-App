import React from 'react'

function Weather() {
    return (
        <div>
            <div class="container">
                <form class="col-md-6 m-auto py-5">
                    <div class="input-group mb-3">
                        <input id="city" type="text" class="form-control" placeholder="Enter a location for Weather ..."/>
                            <div class="input-group-append">
                                <button onclick="searchTemperature()" type="button" class="btn btn-danger">Search</button>
                            </div>
                    </div>
                </form>
                <div class="weather-status text-white text-center">
                    <img id="weather-icon" src="https://openweathermap.org/img/wn/02d@2x.png" alt=""/>

                        <h1 id="city-name">Dhaka</h1>
                        <h3><span id="temp">38.06</span>&deg;C</h3>
                        <h1 id="condition" class="lead">Clouds</h1>
                </div>
            </div>
        </div>
    )
}

export default Weather
