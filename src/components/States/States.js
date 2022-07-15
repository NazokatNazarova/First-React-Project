import { Component } from "react";

class States extends Component {
  constructor(props) {
    super(props);
    this.state = {
      val: 0,
    };
  }
  increment = () => {
    this.setState({ val: this.state.val + 1 });
  };
  decrement = () => {
    this.setState({ val: this.state.val - 1 });
  };
  reset = () => {
    this.setState({ val: 0 });
  };

  render() {
    return (
      <div>
        <span>{this.state.val}</span>
        <button onClick={this.decrement}>-</button>
        <button onClick={this.reset}>0</button>
        <button onClick={this.increment}>+</button>
      </div>
    );
  }
}

export default States;
