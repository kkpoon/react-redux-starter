'use strict';

import falcor from "falcor";
import HttpDataSource from "falcor-http-datasource";

const model = new falcor.Model({
  source: new HttpDataSource('/model.json')
});

function fetched(message) {
  return { type: "FETCHED_FALCOR_HELLO", message };
}

function fetching() {
  return { type: "FETCHING_FALCOR_HELLO" };
}

export default function() {
  return (dispatch) => {
    dispatch(fetching());
    model.get("greeting")
      .then(response => {
        dispatch(fetched(response.json.greeting));
      });
  }
}
