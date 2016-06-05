import { connect } from "react-redux";

import languageChange from "../actions/language/change";
import LanguageCard from "../components/language-card";

const mapStateToProps = (state) => {
  return {
    locale: state.language.get("locale"),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLanguageSelect: (locale) => {
      dispatch(languageChange(locale));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LanguageCard);
