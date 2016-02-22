import { connect } from 'react-redux';
import { IntlProvider } from "react-intl";

const mapStateToProps = (state) => {
  return {
    locale: state.i18n.get("locale"),
    messages: state.i18n.get("messages"),
    key: state.i18n.get("locale")
  };
};

export default connect(mapStateToProps)(IntlProvider);
