import React from "react";
import { connect } from "react-redux";

import { changeLanguage } from "../../../actions";

function LanguageCard({locale, dispatch}) {
  return (
    <div style={{width: "100%"}}>
      <h2>Language Options</h2>
      <div>
        En <input type="radio" name="lang" checked={ locale === "en" } onChange={() => dispatch(changeLanguage("en"))}/><br/>
        繁 <input type="radio" name="lang" checked={ locale === "zh-Hans" } onChange={() => dispatch(changeLanguage("zh-Hans"))}/><br/>
        简 <input type="radio" name="lang" checked={ locale === "zh-Hans-CN" } onChange={() => dispatch(changeLanguage("zh-Hans-CN"))} /><br/>
      </div>
    </div>
  );
}

module.exports = connect((state) => {
  return {
    locale: state.language.get("locale"),
  };
})(LanguageCard);
