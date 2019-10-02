import React from 'react';
import { SketchPicker, TwitterPicker, BlockPicker, CirclePicker, HuePicker, AlphaPicker, MaterialPicker } from 'react-color'
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
					colors = {["#f44336", "#e91e63", "#9c27b0", "#673ab7", "#3f51b5", "#2196f3", "#03a9f4", "#00bcd4", "#009688", "#4caf50", "#8bc34a", "#cddc39", "#ffeb3b", "#ffc107", "#ff9800", "#ff5722", "#795548", "#607d8b"]}
					onChange={(color) => this.handleChangeComplete(color)}
				/>
        // <CirclePicker
        //   color={ this.state.background }
				// 	circleSize={15}
				// 	colors = {["#f44336", "#e91e63", "#9c27b0", "#673ab7", "#3f51b5", "#2196f3", "#03a9f4", "#00bcd4", "#009688", "#4caf50", "#8bc34a", "#cddc39", "#ffeb3b", "#ffc107", "#ff9800", "#ff5722", "#795548", "#607d8b"]}
        //  onChange={(color) => this.handleChangeComplete(color)}
        // />
      )
    }
    return output
  }

  render() {
    return (
      <div className="App">
        <button onClick={() => this.toggleColorPicker()} >toggle colorpicker</button>
        {this.renderColorPicker()}
        <div style={{background: this.state.background, width: 100, height: 100}}></div>
      </div>
    );
  }
}

export default App;
