import React, { Component, useState } from 'react';

const ClickCounter = () => {
  const [count, setCount] = useState(0); //default value of this state will be 0.
  return (
    <div>
      {/*When clicked, increment the value of 'count'*/}
      <button onClick={() => setCount(count => count + 1)}>Increment</button>
      <p>Clicked: {count}</p> {/*Render the value of count*/}
    </div>
  );
};

function HoverCounter(props) {
  const [count, setCount] = useState(0);
  return (
    <div>
      {/*If the user hovers over this button, then increment 'count'*/}
      <button onMouseOver={() => setCount(count => count + 1)}>
        Increment
      </button>
      <p>Clicked: {count}</p>
    </div>
  );
}
export { HoverCounter, ClickCounter };

export class HoverCounterClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  increment = () => {
    console.log('object');
    this.setState(prev => ({ count: prev.count + 1 }));
  };
  render() {
    return (
      <div>
        <h3>Count: {this.state.count}</h3>
        <button onClick={this.increment}>Inc</button>
      </div>
    );
  }
}

export default HoverCounterClass;
