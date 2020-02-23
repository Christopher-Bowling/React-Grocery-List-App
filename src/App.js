import React, { Component } from 'react';
import './App.css';
import Heading from './Heading/Heading';
import ItemController from './ItemController/ItemController';


class App extends Component {

  render() {
    return (
      <div>
        <Heading />
        <ItemController />
      </div>
    );
  }
  
}

export default App;
