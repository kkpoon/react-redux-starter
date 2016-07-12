import { fromJS } from "immutable";

import trans from "../translations";

const initialState = fromJS({
  locale: "en",
  messages: {},
  key: "en",
});

function language(state = initialState, action) {
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
