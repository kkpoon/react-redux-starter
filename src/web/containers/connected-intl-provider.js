import { connect } from "react-redux";
import { IntlProvider } from "react-intl";

const mapStateToProps = (state) => {
  return {
    locale: state.language.get("locale"),
    messages: state.language.get("messages"),
    key: state.language.get("locale")
  };
};

export default connect(mapStateToProps)(IntlProvider);
