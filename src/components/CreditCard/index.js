import React from 'react'
import { Button, Form } from 'semantic-ui-react'
import Cards from 'react-credit-cards'

import 'semantic-ui-css/semantic.min.css'
import 'react-credit-cards/es/styles-compiled.css'
import './style.scss'

class CreditCard extends React.Component {
  
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

  render () {
    return <div className='react-card-container'>
    <Cards
      cvc={this.state.cvc}
      expiry={this.state.expiry}
      focused={this.state.focus}
      name={this.state.name}
      number={this.state.number}
      preview={false}
    />
    <Form>
      <Form.Field>
        <label>Name</label>
        <input 
          name='name'
          placeholder='Name' 
          onFocus={this.handleInputFocus}
          onChange={this.handleInputChange}
        />
      </Form.Field>
      <Form.Field>
        <label>Number</label>
        <input
          type="tel"
          name='number'
          maxLength={16}
          placeholder='Number'
          onFocus={this.handleInputFocus}
          onChange={this.handleInputChange}
        />
      </Form.Field>
      <Form.Field>
        <label>expiry date</label>
        <input
          name='expiry'
          maxLength={4}
          placeholder='Expiry date'
          onFocus={this.handleInputFocus}
          onChange={this.handleInputChange}
        />
      </Form.Field>
      <Form.Field>
        <label>CVC</label>
        <input 
          name='cvc'
          maxLength={3}
          placeholder='CVC'
          onFocus={this.handleInputFocus}
          onChange={this.handleInputChange}
        />
      </Form.Field>
    </Form>
 </div>
  }
}

export default CreditCard