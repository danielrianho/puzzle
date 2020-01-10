import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {shuffle, range, every,} from 'lodash'

const layout = range(0, 15).map(n => {
    const row = Math.floor(n / 4);
    const col = n % 4;
    return [80 * col, 80 * row];
});

console.log(layout);

class App extends Component { 

  constructor(props) {
    super(props);
    this.state = {
        positions: shuffle(range(0, 16))
    }
  }
    

  render() {
    const test = this.state.positions;
    console.log(test);
        return (<div className="game">
          {test.map((key) => )}
        </div>)
    }

}

export default App;
