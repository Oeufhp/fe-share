import React from 'react'
import EventEmitter from '../../events'
import './style.scss'

import {Cookie} from '../Cookie'

class CookieContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state  = {
      cookieName: '',
    }
    EventEmitter.subscribe('onCookieNameChange', (e) => this.onCookieNameChange(e))
  }
  
  onCookieNameChange(e) {
    this.setState({ cookieName: e.target.value })
  }  

  render() {
    return (
      <div className='cookie-wrapper'>
        <div className='cookie-name'>{this.state.cookieName}</div>
        <Cookie cookieName={this.state.cookieName} />
      </div>
    )
  }
}

export default CookieContainer