import React from 'react'
import CookieContainer from '../components/CookieContainer'
import CreditCard from '../components/CreditCard'

import './App.css'

class App extends React.Component {
  state = {
    cvc: '',
    expiry: '',
    focus: '',
    name: '',
    number: '',
  }

  handleInputFocus = (e) => {
    this.setState({ focus: e.target.name });
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  }

  renderReactCards() {
    return <CreditCard/>
  }

renderCookie() {
  return <CookieContainer/>
}

  render() {
    return (
      <div className="App">
        {this.renderReactCards()}
        {/* {this.renderCookie()} */}
      </div>
    )
  }
}

export default App;
