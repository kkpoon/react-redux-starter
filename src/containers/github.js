/*
 * this container conform the suggested pattern described in
 * https://rackt.org/redux/docs/basics/UsageWithReact.html
 *
 */

import { connect } from 'react-redux';

import fetchGithubUser from '../actions/github/fetch';

import GithubCard from '../components/github-card';

const mapStateToProps = (state) => {
  const user = state.github.get("user");
  return {
    name: user.name || "",
    created_at: user.created_at || "",
    repositories: user.repos || [],
    loading: state.github.get("fetching")
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLoadButtonClick: (username) => dispatch(fetchGithubUser(username))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GithubCard);
