'use strict';

import colors from "material-colors";

import React, { Component, PropTypes } from 'react';

import classNames from "classnames";

//import '../themes/default-md/components/text-card';

class GithubCard extends Component {

  render() {
    const {
      name,
      created_at,
      repositories,
      loading,
      titleBackgroundColor,
      titleFontColor
    } = this.props;
    const repos = repositories.map(repo => {
      return (
        <tr key={repo.name}>
          <td className="mdl-data-table__cell--non-numeric">
            <a href={repo.html_url} target="_blank">
              {repo.name}
            </a>
          </td>
          <td>{repo.stargazers_count}</td>
          <td>{repo.watchers_count}</td>
          <td>{repo.forks_count}</td>
        </tr>
      );
    });
    const dataTable = repositories.length > 0 ? (
      <table className="mdl-data-table mdl-js-data-table mdl-shadow--2dp"
        style={{color: colors.black}}>
        <thead>
          <tr>
            <th className="mdl-data-table__cell--non-numeric">Name</th>
            <th>Stars</th>
            <th>Watchers</th>
            <th>Forks</th>
          </tr>
        </thead>
        <tbody>
          {repos}
        </tbody>
      </table>
    ) : (<h6>No data</h6>);
    return (
      <div className="counter-card mdl-card mdl-shadow--2dp">
        <div className="mdl-card__title mdl-card--expand" style={{
          backgroundColor: titleBackgroundColor,
          color: titleFontColor
        }}>
          <h4>Github - 10 most recent pushed repositories</h4>
        </div>
        <div className="mdl-card__supporting-text">
          <h4>{name}</h4>
          <h6>on github since {created_at}</h6>
          {dataTable}
        </div>
        <div className="mdl-card__actions mdl-card--border" style={{
          color: colors.black
        }}>
          <form action="#">
            <div className="mdl-textfield mdl-js-textfield
                            mdl-textfield--floating-label">
              <input className="mdl-textfield__input"
                     type="text"
                     id="githubUsername"
                     ref="txtGithubUsername" />
              <label className="mdl-textfield__label"
                     htmlFor="githubUsername">Github Username</label>
            </div>
          </form>
          <button className="mdl-button mdl-js-button mdl-button--raised
                             mdl-js-ripple-effect mdl-button--colored"
                  onClick={e => this.handleLoadButtonClick(e)}>
            Load
          </button>
          <div className="mdl-layout-spacer"></div>
          <div className={
            classNames(
              "mdl-spinner",
              "mdl-spinner--single-color",
              "mdl-js-spinner", {
                "is-active": loading,
                "is-upgraded": loading
              }
            )
          }></div>
        </div>
      </div>
    );
  }

  handleLoadButtonClick(e) {
    const input = this.refs.txtGithubUsername;
    const username = input.value.trim();
    this.props.onLoadButtonClick(username);
  }
}

GithubCard.propTypes = {
  name: PropTypes.string.isRequired,
  created_at: PropTypes.string.isRequired,
  repositories: PropTypes.array.isRequired,
  loading: PropTypes.bool,
  titleBackgroundColor: PropTypes.string,
  titleFontColor: PropTypes.string,
  onLoadButtonClick: PropTypes.func.isRequired
};

GithubCard.defaultProps = {
  titleBackgroundColor: colors.lightGreen[300],
  titleFontColor: colors.white,
  loading: false
};

export default GithubCard;
