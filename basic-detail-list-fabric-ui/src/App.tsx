import React, { Component } from 'react';
import './App.css';
import PolicyList from './PolicyList'
import PolicyV1List from './PolicyV1List'

class App extends Component {
  render() {
    return (
      <div className="App">
        <PolicyV1List/>
       
      </div>
    );
  }
}

export default App;
