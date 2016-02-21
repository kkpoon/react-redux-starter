'use strict';

import classNames from "classnames";
import React, { Component, PropTypes } from 'react';

class Card extends Component {

  render() {
    const { width, height, shadow } = this.props;
    const shadowClass = "mdl-shadow--" + shadow;

    return (
      <div
        className={classNames("mdl-card", shadowClass)}
        style={{width: width, height: height}}>
        {this.props.children}
      </div>
    );
  }

}

Card.propTypes = {
  width: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  height: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  shadow: PropTypes.oneOf(["2dp", "3dp", "4dp", "6dp", "8dp", "16dp"])
};

Card.defaultProps = {
  width: "auto",
  height: "auto",
  shadow: "2dp"
};

export default Card;
