/*
 * TODO this is implemented by es6, however, suppose to be a TypeScript example.
 *
 * this container conform the suggested pattern described in
 * https://rackt.org/redux/docs/basics/UsageWithReact.html
 *
 */

import { connect } from "react-redux";

import helloUpdate from "../actions/hello/update";
import helloClear from "../actions/hello/clear";

import GreetingCard from "../components/greeting-card";

const mapStateToProps = (state) => {
  return {
    greetingMessage: state.hello,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onGreetingMessageChange: (msg) => {
      dispatch(helloUpdate(msg));
    },
    onClearButtonClick: () => {
      dispatch(helloClear());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GreetingCard);
