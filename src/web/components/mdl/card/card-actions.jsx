'use strict';

import React, { Component, PropTypes } from 'react';
import classNames from "classnames";

class CardActions extends Component {

  render() {
    const { hasBorder } = this.props;
    
    return (
      <div
        className={
          classNames(
            "mdl-card__actions",
            {
              "mdl-card--border": hasBorder
            }
          )
        }
        style={{
          display: "flex",
          boxSizing: "border-box",
          alignItems: "center"
        }}>
        {this.props.children}
      </div>
    );
  }

}

CardActions.propTypes = {
  hasBorder: PropTypes.bool
};

CardActions.defaultProps = {
  hasBorder: true
};

export default CardActions;
