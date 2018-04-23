import React, { Component } from 'react';
import MainSelectionView from './components/main-selection-view/main-selection-view';
import About from './components/about/about';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainSelectionView/>
        <About/>
      </div>
    );
  }
}

export default App;
