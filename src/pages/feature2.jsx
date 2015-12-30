/*
 * @flow
 */

'use strict';

import React, {Component} from 'react';

const Styles = {
  WelcomeCard: {
    width: "100%"
  },
  WelcomeCardTitle: {
    color: "white",
    height: 176,
    backgroundColor: "#46B6AC"
  },
  WelcomeCardMenu: {
    color: "white"
  },
  SideCardTitle: {
    color: "white",
    height: 80,
    backgroundColor: "#46B6AC"
  },
  DataTable: {
    width: "100%"
  }
}

class Feature1Page extends Component<{}, {}, {}> {
  render(): ?ReactElement {
    return (
      <div className="mdl-grid">
        <div className="mdl-cell mdl-cell--8-col">
          <div className="mdl-card mdl-shadow--2dp" style={Styles.WelcomeCard}>
            <div className="mdl-card__title" style={Styles.WelcomeCardTitle}>
              <h2 className="mdl-card__title-text">Feature 2 Overview</h2>
            </div>
            <div className="mdl-card__supporting-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Mauris sagittis pellentesque lacus eleifend lacinia...
            </div>
            <div className="mdl-card__actions mdl-card--border">
              <a className="mdl-button
                            mdl-button--colored
                            mdl-js-button
                            mdl-js-ripple-effect">
                Get Started
              </a>
            </div>
            <div className="mdl-card__menu" style={Styles.WelcomeCardMenu}>
              <button className="mdl-button
                                 mdl-button--icon
                                 mdl-js-button
                                 mdl-js-ripple-effect">
                <i className="material-icons">share</i>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

//export default HomePage;
module.exports = Feature1Page;
