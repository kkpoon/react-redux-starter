/*
 * @flow
 */

'use strict';

import 'material-design-lite/material.min.css'
import 'material-design-lite/material.min'
import '../css/mdl-layout-custom.css'

import WebFont from 'webfontloader';
import React, {Component} from 'react';
import { Link } from 'react-router';

WebFont.load({
  google: {
    families: [
      "Roboto:300,400,500,700:latin",
      "Roboto+Condensed:400,300,700:latin",
      "Material+Icons"
    ]
  },
  timeout: 5000
});

class DefaultLayout extends Component<{}, {}, {}> {
  render(): ?ReactElement {
    return (
      <div className="mdl-layout mdl-js-layout">
        <header className="mdl-layout__header mdl-layout__header--scroll">
          <div className="mdl-layout__header-row">
            <span className="mdl-layout-title">React Redux Boilerplate</span>
            <div className="mdl-layout-spacer"></div>
            <div className="mdl-textfield mdl-js-textfield
                            mdl-textfield--expandable
                            mdl-textfield--floating-label
                            mdl-textfield--align-right">
              <label className="mdl-button mdl-js-button mdl-button--icon"
                     htmlFor="globalSearch">
                <i className="material-icons">search</i>
              </label>
              <div className="mdl-textfield__expandable-holder">
                <input className="mdl-textfield__input"
                       type="text" name="search" id="globalSearch" />
              </div>
            </div>
          </div>
        </header>
        <div className="mdl-layout__drawer">
          <span className="mdl-layout-title">K.K. POON</span>
          <div className="mdl-layout-spacer"></div>
          <nav className="mdl-navigation">
            <Link className="mdl-navigation__link mdl-navigation__link--icon"
                  to="/home">
              <i className="material-icons">home</i>
              <span>Home</span>
            </Link>
            <Link className="mdl-navigation__link mdl-navigation__link--icon"
                  to="/feature1">
              <i className="material-icons">dashboard</i>
              <span>Feature 1</span>
            </Link>
            <Link className="mdl-navigation__link mdl-navigation__link--icon"
                  to="/feature2">
              <i className="material-icons">donut_small</i>
              <span>Feature 2</span>
            </Link>
          </nav>
          <div className="mdl-layout-spacer"></div>
          <nav className="mdl-navigation">
            <a className="mdl-navigation__link mdl-navigation__link--icon"
               href="">
              <i className="material-icons">settings</i>
              <span>Settings</span>
            </a>
            <a className="mdl-navigation__link mdl-navigation__link--icon"
               href="">
              <i className="material-icons">exit_to_app</i>
              <span>Sign out</span>
            </a>
          </nav>
        </div>
        <main className="mdl-layout__content">
          <div className="page-content">
            {this.props.children}
          </div>
        </main>
        <footer className="mdl-mini-footer">
          <div className="mdl-mini-footer__left-section">
            <div className="mdl-logo">
              React Redux Boilerplate
            </div>
            <ul className="mdl-mini-footer__link-list">
              <li><a href="#">Help</a></li>
              <li><a href="#">Privacy &amp; Terms</a></li>
            </ul>
          </div>
        </footer>
      </div>
    );
  }
}

export default DefaultLayout;
