import React, { Component } from 'react';

export class Data extends Component {

  const 


        // {this.state.positions.map((i, key)=> {
        //   let cellClass = key ? "cell":'empty cell';
        //   let [x,y] = layout[this.state.positions.indexOf(key)];
        //   return <div className={cellClass}
        //                onClick={this.updatePosition.bind(this, key)}
        //                style={{transform: `translate3d(${x}px,${y}px,0) scale(1.1)`}}>{key}</div>

        //     })}

render() {

  const test = this.props.newData;
        return (<div className="game">
            {test.map((i, key)=> {
                let cellClass = key ? "cell":'empty cell';
                let [x,y] = layout[test.indexOf(key)];
                return <div className={cellClass}
                             onClick={this.updatePosition.bind(this, key)}
                             style={{transform: `translate3d(${x}px,${y}px,0) scale(1.1)`}}>{key}</div>

            })}
        </div>)
    }
}

export default Data;
  

