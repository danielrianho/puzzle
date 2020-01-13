import React, { Component } from 'react';
import './App.css';
import Data from './components/Data';


class App extends Component { 

 constructor(props) {
    super(props);
    this.state = { board: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 0], size: 4 };
  }

  newGame(size) {
    let board = new Array(size * size);
    for (let i = 0; i < size * size; ++i) board[i] = i;
    board = this.shuffle(board);
    this.updateBoard(board);
  }

  updateBoard(board, size) {
    this.setState({ board: board });
  }
  shuffle(o) {
    const temp = o.slice();
    for(var j, x, i = temp.length; i; j = Math.floor(Math.random() * i), x = temp[--i], temp[i] = temp[j], temp[j] = x);
    return temp;
  }


  render() {
    return (
      <div className='container'>

        <h1>React - 15-pussel</h1>

        {
          this.state && this.state.board ? 
            <Data size={this.state.size} board={this.state.board} updateBoard={this.updateBoard.bind(this)} />
            : null
        }
        <input type='submit' value='Slumpad' onClick={this.newGame.bind(this, 4)} />
      </div>
    );
  }


}

export default App;
