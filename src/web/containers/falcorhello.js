/*
 * this container conform the suggested pattern described in
 * https://rackt.org/redux/docs/basics/UsageWithReact.html
 *
 */

import { connect } from 'react-redux';

import fetchFalcorHello from '../actions/falcorhello/fetch';

import TextCard from '../components/text-card';

const mapStateToProps = (state) => {
  return {
    text: state.falcorHello.get("message"),
    loading: state.falcorHello.get("fetching")
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onReloadButtonClick: () => dispatch(fetchFalcorHello())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TextCard);
