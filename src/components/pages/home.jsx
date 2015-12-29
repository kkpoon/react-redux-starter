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

class HomePage extends Component<{}, {}, {}> {
  render(): ?ReactElement {
    return (
      <div className="mdl-grid">
        <div className="mdl-cell mdl-cell--8-col">
          <div className="mdl-card mdl-shadow--2dp" style={Styles.WelcomeCard}>
            <div className="mdl-card__title" style={Styles.WelcomeCardTitle}>
              <h2 className="mdl-card__title-text">Overview</h2>
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
        <div className="mdl-cell mdl-cell--4-col">
          <div className="mdl-card mdl-shadow--2dp" style={Styles.WelcomeCard}>
            <div className="mdl-card__title" style={Styles.SideCardTitle}>
              <h2 className="mdl-card__title-text">Table View</h2>
            </div>
            <div className="mdl-card__supporting-text">
              <table className="mdl-data-table
                                mdl-js-data-table
                                mdl-shadow--2dp"
                     style={Styles.DataTable}>
                <thead>
                  <tr>
                    <th className="mdl-data-table__cell--non-numeric">
                      Material
                    </th>
                    <th>Quantity</th>
                    <th>Unit price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="mdl-data-table__cell--non-numeric">Acrylic</td>
                    <td>25</td>
                    <td>$2.90</td>
                  </tr>
                  <tr>
                    <td class="mdl-data-table__cell--non-numeric">Plywood</td>
                    <td>50</td>
                    <td>$1.25</td>
                  </tr>
                  <tr>
                    <td class="mdl-data-table__cell--non-numeric">Laminate</td>
                    <td>10</td>
                    <td>$2.35</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="mdl-card mdl-shadow--2dp" style={Styles.WelcomeCard}>
            <div className="mdl-card__title" style={Styles.SideCardTitle}>
              <h2 className="mdl-card__title-text">Table View Again</h2>
            </div>
            <div className="mdl-card__supporting-text">
              <table className="mdl-data-table
                                mdl-js-data-table
                                mdl-shadow--2dp"
                     style={Styles.DataTable}>
                <thead>
                  <tr>
                    <th className="mdl-data-table__cell--non-numeric">
                      Material
                    </th>
                    <th>Quantity</th>
                    <th>Unit price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="mdl-data-table__cell--non-numeric">Acrylic</td>
                    <td>25</td>
                    <td>$2.90</td>
                  </tr>
                  <tr>
                    <td class="mdl-data-table__cell--non-numeric">Plywood</td>
                    <td>50</td>
                    <td>$1.25</td>
                  </tr>
                  <tr>
                    <td class="mdl-data-table__cell--non-numeric">Laminate</td>
                    <td>10</td>
                    <td>$2.35</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

//export default HomePage;
module.exports = HomePage;
