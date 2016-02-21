'use strict';

import colors from "material-colors";
import React, { Component, PropTypes } from 'react';

import Card from "./card";
import CardTitle from "./card-title";
import CardSupportingText from "./card-supporting-text";
import CardActions from "./card-actions";
import CardMenu from "./card-menu";
import Button from "../button";

const DefaultStyles = {
  Card: {
    width: "100%",
    height: "auto"
  },
  Title: {
    height: 150,
    color: colors.white,
    background: colors.blue[500]
  },
  Menu: {
    color: colors.white
  }
};

class StandardCard extends Component {

  render() {
    const { title, menuIcon, styles } = this.props;

    const Styles = {
      Card: Object.assign({}, DefaultStyles.Card, styles.Card),
      Title: Object.assign({}, DefaultStyles.Title, styles.Title),
      Menu: Object.assign({}, DefaultStyles.Menu, styles.Menu)
    };
    const bodyContent = this.renderBody();
    const actionsContent = this.renderActions();

    return (
      <Card width="100%">
        <CardTitle style={Styles.Title}>{title}</CardTitle>
        <CardSupportingText>
          {bodyContent}
        </CardSupportingText>
        {(() => {
          if (actionsContent !== null) {
            return (
              <CardActions>
                {actionsContent}
              </CardActions>
            );
          }
        })()}
        <CardMenu style={Styles.Menu}>
          <Button type="icon" ripple={true} icon={menuIcon} />
        </CardMenu>
      </Card>
    );
  }

  renderBody() {
    return "";
  }

  renderActions() {
    return null;
  }
}

StandardCard.propTypes = {
  title: PropTypes.string,
  menuIcon: PropTypes.string,
  styles: PropTypes.shape({
    Card: PropTypes.shape({
      width: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
      ]),
      height: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
      ])
    }),
    Title: PropTypes.shape({
      height: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
      ]),
      color: PropTypes.string,
      background: PropTypes.string
    }),
    Menu: PropTypes.shape({
      color: PropTypes.string
    })
  })
};

StandardCard.defaultProps = {
  title: "",
  menuIcon: "more_vert",
  styles: {}
};

export default StandardCard;
