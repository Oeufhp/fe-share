import React, { useState, useEffect } from 'react'

const GetWeatherComponent = () => {

  const [latLongObj, setLatLongobj] = useState({ lat: 0, long: 0 })
  const [weatherData, setWeatherData] = useState(undefined)

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latLongObj.lat}&lon=${latLongObj.long}&appid=''`,
      {
        method: 'GET',
      }
    )
    .then(res => res.json())
    .then(res => {
      setWeatherData(res)
    })
  }, [latLongObj])

  const getCurrentWeather = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        console.log(position)
        setLatLongobj({ 
          lat: position.coords.latitude,
          long: position.coords.longitude 
        })
      }, (err) => console.log(err))
    } else {
      alert('No gps')
    }
  }
  return (
    <div className='container'>

      <button 
        id='get-location-btn' 
        onClick={getCurrentWeather()}
      >
        Get current location
      </button>
      {weatherData &&
        <div className='data-container'>
          <div>{`Your current location is ${weatherData.name}`}</div>
          <div>{`Condition: ${weatherData.weather[0].description}`}</div>
          <div>{`Temp: ${weatherData.main.temp/10} c`}</div>

        </div>
      }
    </div>
  )
}

export default GetWeatherComponent