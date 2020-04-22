import React from "react";
import Menu from '../components/Menu'
import "./App.css";

class App extends React.Component {


  render() {
    return (
      <div className="App">
        <Menu disableOnClickOutside={true} />
      </div>
    )
  }
}

export default App;
