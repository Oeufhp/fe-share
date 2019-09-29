import React from 'react';
import { SketchPicker, TwitterPicker,  } from 'react-color'
import './App.css';

class App extends React.Component {

  state = {
    background: '#000',
    getColorPicker: false
  }

  toggleColorPicker() {
    this.setState({
      getColorPicker: !this.state.getColorPicker
    })
  }

  handleChangeComplete(color) {
    this.setState({ background: color.hex });
  }

  renderColorPicker() {
    let output = null
    if (this.state.getColorPicker) {
      output = (
        <SketchPicker
          color={ this.state.background }
          onChangeComplete={(color) => this.handleChangeComplete(color)}
        />
      )
    }
    return output
  }

  getToggleWithoutJS() {
    return (
    <>
      <div>
        <p>This is some expandable content.</p>

        <p id="hashLink">
          I have expanded like a Pufferfish.
          <a href="#">Please collapse this poor fish.</a>
        </p>
      </div>

      <a href="#hashLink">Expand</a>
    </>
    )
  }

  render() {
    return (
      <div className="App">
        <button onClick={() => this.toggleColorPicker()} >toggle colorpicker</button>
        {this.renderColorPicker()}
        <div style={{background: this.state.background, width: 100, height: 100}}></div>
        {this.getToggleWithoutJS()}
      </div>
    );
  }
}

export default App;
