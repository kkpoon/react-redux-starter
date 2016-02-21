'use strict';

import colors from "material-colors";
import React, { Component, PropTypes } from 'react';

const DefaultStyle = {
  color: colors.white
};

class CardMenu extends Component {

  render() {
    const { style } = this.props;
    const Style = Object.assign({}, DefaultStyle, style);
    return (
      <div className="mdl-card__menu" style={Style}>
        {this.props.children}
      </div>
    );
  }

}

CardMenu.propTypes = {
  style: PropTypes.shape({
    color: PropTypes.string
  })
};

CardMenu.defaultProps = {
  style: {}
};

export default CardMenu;
