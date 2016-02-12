'use strict';

import 'material-design-lite/material';

import '../themes/default-md/base';
import '../themes/default-md/layout';

import WebFont from 'webfontloader';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';
import d3 from 'd3';

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

class DefaultLayout extends Component {

  render() {
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
        <div className="mdl-layout__drawer" ref="drawer">
          <span className="mdl-layout-title">K.K. POON</span>
          <nav className="mdl-navigation">
            <Link
              className="mdl-navigation__link mdl-navigation__link--icon"
              to="/home"
              onClick={e => this.handleNavLinkClick(e)}
              >
              <i className="material-icons">home</i>
              <span>Home</span>
            </Link>
            <Link
              className="mdl-navigation__link mdl-navigation__link--icon"
              to="/feature1"
              onClick={e => this.handleNavLinkClick(e)}
              >
              <i className="material-icons">dashboard</i>
              <span>Feature 1</span>
            </Link>
            <Link
              className="mdl-navigation__link mdl-navigation__link--icon"
              to="/feature2"
              onClick={e => this.handleNavLinkClick(e)}
              >
              <i className="material-icons">donut_small</i>
              <span>Feature 2</span>
            </Link>
          </nav>
          <div className="mdl-layout-spacer"></div>
          <nav className="mdl-navigation">
            <Link
              className="mdl-navigation__link mdl-navigation__link--icon"
              to="/settings"
              onClick={e => this.handleNavLinkClick(e)}
              >
              <i className="material-icons">settings</i>
              <span>Settings</span>
            </Link>
            <Link
              className="mdl-navigation__link mdl-navigation__link--icon"
              to="/logout"
              onClick={e => this.handleNavLinkClick(e)}
              >
              <i className="material-icons">exit_to_app</i>
              <span>Sign out</span>
            </Link>
          </nav>
        </div>
        <main className="mdl-layout__content">
          <div className="page-content" style={{paddingTop: 30}}>
            {this.props.children}
          </div>
          <footer className="mdl-mega-footer">
            <div className="mdl-mega-footer__bottom-section">
              <div className="mdl-logo">
                React Redux Boilerplate
              </div>
              <ul className="mdl-mega-footer__link-list">
                <li><a href="#">Help</a></li>
                <li><a href="#">Privacy &amp; Terms</a></li>
              </ul>
            </div>
          </footer>
        </main>
      </div>
    );
  }

  handleNavLinkClick(e) {
    const drawer = this.refs.drawer;
    d3.select(ReactDOM.findDOMNode(drawer)).classed("is-visible", false);
    d3.select('.mdl-layout__obfuscator').classed("is-visible", false);
  }

}

export default DefaultLayout;
