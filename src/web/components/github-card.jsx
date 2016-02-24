'use strict';

import colors from "material-colors";

import React, { Component, PropTypes } from 'react';
import { Card, CardTitle, CardText, CardActions, Spacer } from "react-mdl";

import classNames from "classnames";

//import '../themes/default-md/components/text-card';

class GithubCard extends Component {

  render() {
    const {
      name,
      created_at,
      repositories,
      totalStars,
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
      <Card shadow={2} style={{width: "100%"}}>
        <CardTitle style={{
          height: 150,
          color: colors.white,
          background: colors.purple[200]
        }}>
          Github - 10 most recent pushed repositories
        </CardTitle>
        <CardText>
          <h4>{name}</h4>
          <h6>on github since {created_at}</h6>
          <h7>{totalStars} stars</h7>
          {dataTable}
        </CardText>
        <CardActions border style={{
          display: "flex",
          boxSizing: "border-box",
          alignItems: "center"
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
          <Spacer />
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
        </CardActions>
      </Card>
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
  totalStars: PropTypes.number,
  loading: PropTypes.bool,
  titleBackgroundColor: PropTypes.string,
  titleFontColor: PropTypes.string,
  onLoadButtonClick: PropTypes.func.isRequired
};

GithubCard.defaultProps = {
  titleBackgroundColor: colors.lightGreen[300],
  titleFontColor: colors.white,
  loading: false,
  totalStars: 0
};

export default GithubCard;
