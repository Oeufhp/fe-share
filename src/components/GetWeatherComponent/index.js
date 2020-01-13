import React, { useState, useEffect } from 'react'
import './style.scss'

const GetWeatherComponent = () => {

  const [latLongObj, setLatLongobj] = useState({ lat: 0, long: 0 })
  const [weatherData, setWeatherData] = useState(undefined)

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latLongObj.lat}&lon=${latLongObj.long}&units=metric&appid=`,
      {
        method: 'GET',
      }
    )
    .then(res => res.json())
    .then(res => {
      setWeatherData(res)
    })
  }, [latLongObj.lat, latLongObj.long])

  const getCurrentWeather = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLatLongobj({ 
          lat: position.coords.latitude,
          long: position.coords.longitude 
        })
      }, (err) => console.log(err))
    } else {
      alert('No gps')
    }
  }

  console.log(weatherData)

  return (
    <div className='container'>
      <div className='btn-wrapper'>
        <button 
          id='get-location-btn' 
          onClick={() => getCurrentWeather()}
        >
          Get current location
        </button>
        <button
          id='reset-location-btn'
          onClick={() => setLatLongobj({
            lat: 0,
            long: 0
          })}
        >
          Reset location
        </button>
      </div>
      
      {weatherData &&
        <div className='data-container'>
          <div>{`Current location: ${weatherData.name}`}</div>
          <div>{`Condition: ${weatherData.weather[0].description}`}</div>
          <div>{`Temp: ${weatherData.main.temp} c`}</div>
          <div>{`Pressure: ${weatherData.main.pressure} hPa`}</div>
          <div>{`wind data: {speed: ${weatherData.wind.speed} m/s, degree: ${weatherData.wind.deg} degree} `}</div>
        </div>
      }
    </div>
  )
}

export default GetWeatherComponent