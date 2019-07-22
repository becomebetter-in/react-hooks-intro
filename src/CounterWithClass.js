import React from 'react';

class CounterWithClass extends React.Component {
    
    constructor (props){
        super(props); 
        this.state = {
          count: 0
        }
      }

    inc() {
      this.setState({count: this.state.count+1})
    } 

    dec() {
      this.setState({count: this.state.count-1})
    } 

    render () {
      return (
        <div>
        <p>
          Clicked {this.state.count}x!
        </p>
        <p>
          <button onClick={() => this.inc()}>Increment</button>
          <button onClick={() => this.dec()}>Decrement</button>
        </p>
    </div>
      );
    }
  }

  export default CounterWithClass;
  