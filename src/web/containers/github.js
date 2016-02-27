/*
 * this container conform the suggested pattern described in
 * https://rackt.org/redux/docs/basics/UsageWithReact.html
 *
 */

import { connect } from "react-redux";

import fetchGithubUser from "../actions/github/fetch";
import GithubCard from "../components/github-card";
import { githubContainerSelector } from "../selectors/github";


const mapDispatchToProps = (dispatch) => {
  return {
    onLoadButtonClick: (username) => dispatch(fetchGithubUser(username))
  };
};

export default connect(githubContainerSelector, mapDispatchToProps)(GithubCard);
