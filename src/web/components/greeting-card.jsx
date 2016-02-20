'use strict';

import colors from "material-colors";
import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

class GreetingCard extends Component {

  render() {
    const {
      title,
      greetingMessage,
      width,
      height,
      titleHeight,
      titleBackgroundColor,
      titleFontColor,
      menuIcon,
      menuIconColor
    } = this.props;
    return (
      <div className="mdl-card mdl-shadow--2dp" style={{
        width: width,
        height: height
      }}>
        <div className="mdl-card__title" style={{
          backgroundColor: titleBackgroundColor,
          color: titleFontColor,
          height: titleHeight
        }}>
          <h2 className="mdl-card__title-text">{title}</h2>
        </div>
        <div className="mdl-card__supporting-text">
          {greetingMessage}
          <form action="#">
            <div className="mdl-textfield mdl-js-textfield" ref="gMsgField">
              <input className="mdl-textfield__input"
                     type="text"
                     id="gMsg"
                     ref="gMsgInput"
                     onChange={e => this.handleGreetMsgChange(e)} />
              <label className="mdl-textfield__label" htmlFor="gMsg">
                Say Hello...
              </label>
            </div>
          </form>
        </div>
        <div className="mdl-card__actions mdl-card--border">
          <button className="mdl-button mdl-button--colored mdl-js-button
                             mdl-js-ripple-effect"
                  onClick={e => this.handleClearButtonClick(e)}>
            Clear
          </button>
        </div>
        <div className="mdl-card__menu" style={{
          color: menuIconColor
        }}>
          <button className="mdl-button mdl-button--icon mdl-js-button
                             mdl-js-ripple-effect">
            <i className="material-icons">{menuIcon}</i>
          </button>
        </div>
      </div>
    );
  }

  handleClearButtonClick(e) {
    const input = this.refs.gMsgInput;
    const field = this.refs.gMsgField;
    input.value = '';
    const className = ReactDOM.findDOMNode(field).className;
    ReactDOM.findDOMNode(field).className = className.replace("is-dirty", "");
    this.props.onClearButtonClick();
  }

  handleGreetMsgChange(e) {
    const input = this.refs.gMsgInput;
    const msg = input.value.trim();
    this.props.onGreetingMessageChange(msg);
  }
}

GreetingCard.propTypes = {
  title: PropTypes.string.isRequired,
  greetingMessage: PropTypes.string.isRequired,
  onGreetingMessageChange: PropTypes.func.isRequired,
  onClearButtonClick: PropTypes.func.isRequired,
  width: PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]),
  height: PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]),
  titleHeight: React.PropTypes.number,
  titleBackgroundColor: PropTypes.string,
  titleFontColor: PropTypes.string,
  menuIcon: PropTypes.string,
  menuIconColor: PropTypes.string
};

GreetingCard.defaultProps = {
  width: "auto",
  height: "auto",
  titleHeight: 150,
  titleBackgroundColor: colors.blue[500],
  titleFontColor: colors.white,
  menuIcon: "more_vert",
  menuIconColor: colors.white
};

export default GreetingCard;
