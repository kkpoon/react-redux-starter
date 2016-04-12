"use strict";

import Color from "color";
import colors from "material-colors";
import React, { Component, PropTypes } from "react";
import {
  Card,
  CardTitle,
  CardActions,
  Button,
  Spacer,
  Spinner
} from "react-mdl";

class CounterCard extends Component {

  render() {
    const {
      counter,
      increasing,
      titleBackgroundColor,
      titleFontColor
    } = this.props;
    return (
      <Card shadow={2} style={{width: "100%", background: colors.green[200]}}>
        <CardTitle expand style={{alignItems: "flex-start"}}>
          <h4 style={{marginTop: 0}}>
            Delayed Counter <i style={{fontSize: "0.5em"}}>for 2000ms</i><br/>
            {counter}
          </h4>
        </CardTitle>
        <CardActions
          style={{
            display: "flex",
            boxSizing: "border-box",
            alignItems: "center",
            background: Color(colors.white).alpha(0.5).rgbaString()
          }}>
          <Button
            raised
            ripple
            colored
            style={{
              color: colors.white,
              fontStyle: "italic"
            }}
            onClick={e => this.handleIncreaseButtonClick(e)}>
            +1
          </Button>
          <Spacer />
          {(() => { if (increasing) { return  (<Spinner />); } })()}
        </CardActions>
      </Card>
    );
  }

  handleIncreaseButtonClick(e) {
    this.props.onIncreaseButtonClick();
  }
}

CounterCard.propTypes = {
  counter: PropTypes.number.isRequired,
  increasing: PropTypes.bool,
  onIncreaseButtonClick: PropTypes.func.isRequired
};

CounterCard.defaultProps = {
};

export default CounterCard;
