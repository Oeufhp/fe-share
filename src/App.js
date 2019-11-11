import React from 'react'
import { Button, Form, Dropdown } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import './App.css'


const localeOptions = [
  {
    key: 'Australia',
    text: 'Australia',
    value: 'au'
  },
  {
    key: 'English(US)',
    text: 'English(US)',
    value: 'en_US'
  },
  {
    key: 'China',
    text: 'China',
    value: 'zh_CN'
  },
  {
    key: 'French',
    text: 'French',
    value: 'fr'
  },
]

class App extends React.Component {

  state = {
    locale: 'en_US'
  }


  handleLocaleChange = (opt) => {
    this.setState({
      locale: opt.value
    })
  }


  render() {
    return (
      <div className="App">
        <Form>
          <Dropdown
            placeholder='localization'
            fluid
            selection
            value={this.state.locale}
            options={localeOptions}
            onChange={this.handleLocaleChange}
          />
          <Form.Field>
            <label>First Name</label>
            <input placeholder='First Name' />
          </Form.Field>
          <Form.Field>
            <label>Last Name</label>
            <input placeholder='Last Name' />
          </Form.Field>
          <Button type='submit'>Submit</Button>
        </Form>
      </div>
    )
  }
}

export default App;
