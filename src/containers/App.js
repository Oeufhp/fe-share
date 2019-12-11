import React from 'react'

import './App.css'

class App extends React.Component {
  state = {
  }

  render() {
    return (
      <div className="App">
        <div className='strike-through-wrapper'>
          <p>Strike through</p>
          
          <p>On sale!</p>
          <s>$200</s>
          <div>$100</div>
        </div>
        <div className="delete-wrapper">
          <p>Delete</p>

          <p>TODO</p>
          <ul>
            <li><del>Get a job</del></li>
            <li>Become a rich man</li>
          </ul>          
        </div>

        <div className="git-wrapper">
          <p>Delete and Insert</p>

          <div style={{ background: 'red' }}><del>- function TEA()</del></div>
          <div style={{ background: 'lawngreen' }}><ins>+ function tea()</ins></div>
        </div>
      </div>
    )
  }
}

export default App;
