'use strict';

import React, { Component, PropTypes } from 'react';
import classNames from "classnames";

class Button extends Component {

  render() {
    const { text, icon, type: btnType, ripple, color, disabled } = this.props;

    const btnClasses = classNames(
      "mdl-button",
      "mdl-js-button",
      {
        "mdl-button--raised": btnType === "raised",
        "mdl-button--fab": btnType === "fab" || btnType === "mini-fab",
        "mdl-button--mini-fab": btnType === "mini-fab",
        "mdl-button--icon": btnType === "icon",
        "mdl-js-ripple-effect": ripple,
        "mdl-button--colored": color === "primary" || color === "accent",
        "mdl-button--primary": color === "primary",
        "mdl-button--accent": color === "accent"
      }
    );

    return (
      <button className={btnClasses}
              onClick={this.props.onClick}
              disabled={disabled}>
        {(() => {
          if (icon !== null) {
            return (<i className="material-icons">{icon}</i>);
          }
        })()}
        {text}
      </button>
    );
  }

}

Button.propTypes = {
  text: PropTypes.string,
  icon: PropTypes.string,
  type: PropTypes.oneOf(["fab", "raised", "flat", "icon", "mini-fab"]),
  ripple: PropTypes.bool,
  color: PropTypes.oneOf(["plain", "primary", "accent"]),
  disabled: PropTypes.bool,
  onClick: PropTypes.func
};

Button.defaultProps = {
  type: "flat",
  ripple: false,
  color: "plain",
  disabled: false,
  onClick: () => {}
};

export default Button;
