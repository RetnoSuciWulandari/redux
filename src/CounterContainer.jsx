import React from "react";
import { connect } from "react-redux";
import {
  increment,
  decrement,
  multiplication,
  division,
  reset
} from "./actions";

class CounterContainer extends React.Component {
  increment = () => {
    this.props.increment();
  };
  decrement = () => {
    this.props.decrement();
  };

  render() {
    return (
      <div>
        <h2>Counter</h2>
        <div>
          <button onClick={this.props.division}>/</button>
          <button onClick={this.decrement}>-</button>
          <span>{this.props.count}</span>
          <button onClick={this.increment}>+</button>
          <button onClick={this.props.multiplication}>*</button>
        </div>
        <button onClick={this.props.reset}>Reset</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    count: state.count
  };
}

const mapDispatchToProps = {
  increment,
  decrement,
  multiplication,
  division,
  reset
};

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
