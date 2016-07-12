function greeting(state = "", action) {
  switch (action.type) {
  case "UPDATE_GREETING":
    return action.message;
  case "CLEAR_GREETING":
    return "";
  default:
    return state;
  }
}

export default greeting;
