import React from "react";

class CounterWithClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  render() {
    return (
      <div>
        <p>Clicked {this.state.count}x!</p>
        <p>
          <button
            onClick={() => this.setState({ count: this.state.count + 1 })}
          >
            Increment
          </button>
          <button
            onClick={() => this.setState({ count: this.state.count - 1 })}
          >
            Decrement
          </button>
        </p>
      </div>
    );
  }
}

export default CounterWithClass;
