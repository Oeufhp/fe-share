import React from 'react'
import GetWeatherComponent from '../components/GetWeatherComponent/index'
import './App.css'

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <GetWeatherComponent/>
      </div>
    )
  }
}

export default App;
