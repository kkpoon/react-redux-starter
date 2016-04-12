"use strict";

import Immutable from "immutable";

import trans from "../translations";

const DefaultLanguage = {
  locale: "en",
  messages: {},
  key: "en",
};

function language(state = Immutable.Map(DefaultLanguage), action) {
  switch (action.type) {
  case "CHANGE_LANGUAGE": {
    const locale = action.locale;
    return state
          .set("locale", locale)
          .set("key", locale)
          .set("messages", trans[locale]);
  }
  default: {
    return state;
  }
  }
}

export default language;
