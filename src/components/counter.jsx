import React, { Component, PropTypes } from "react";

class Counter extends Component {

  render() {
    const { count, calculating } = this.props;
    return (
      <div>
        <h2>Counter</h2>
        <h3>{count}</h3>
        <button
          type="button"
          onClick={() => this.handlePlus1()}
          disabled={calculating}
        >
          {(() => {
            return calculating ? "hardly calculating +1" : "+1";
          })()}
        </button>
      </div>
    );
  }

  handlePlus1() {
    this.props.onIncrease();
  }

}

Counter.propTypes = {
  count: PropTypes.number,
  calculating: PropTypes.bool
};

Counter.defaultProps = {
  count: 0,
  calculating: false
};

export default Counter;
