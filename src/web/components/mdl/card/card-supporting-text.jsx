'use strict';

import React, { Component } from 'react';

class CardSupportingText extends Component {

  render() {
    return (
      <div className="mdl-card__supporting-text">
        {this.props.children}
      </div>
    );
  }

}

CardSupportingText.propTypes = {
};

CardSupportingText.defaultProps = {
};

export default CardSupportingText;
