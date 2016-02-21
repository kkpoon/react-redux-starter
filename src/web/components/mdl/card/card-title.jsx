'use strict';

import colors from "material-colors";
import React, { Component, PropTypes } from 'react';
import classNames from "classnames";

const DefaultStyle = {
  height: 150,
  color: colors.white,
  background: colors.blue[500]
};

class CardTitle extends Component {

  render() {
    const { header, isExpand, isTextBottom, style } = this.props;
    const Style = Object.assign({}, DefaultStyle, style, {
      alignItems: "flex-start"
    });

    return (
      <div
        className={
          classNames(
            "mdl-card__title",
            {
              "mdl-card--expand": isExpand
            }
          )
        }
        style={Style}>
        <header className={classNames({"mdl-card__title-text": isTextBottom})}>
          {this.props.children}
        </header>
      </div>
    );
  }
}

CardTitle.propTypes = {
  header: PropTypes.oneOf(["h1", "h2", "h3", "h4", "h5", "h6", "h7"]),
  isExpand: PropTypes.bool,
  isTextBottom: PropTypes.bool,
  style: PropTypes.shape({
    height: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
    color: PropTypes.string,
    background: PropTypes.string
  })
};

CardTitle.defaultProps = {
  header: "h2",
  isExpand: false,
  isTextBottom: true,
  style: {}
};

export default CardTitle;
