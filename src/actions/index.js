import C from "./constants";

export const increaseCounter = () => ({ type: C.INCREASE_COUNTER });
export const increaseCounterAsync = () => ({ type: C.INCREASE_COUNTER_ASYNC });
export const increasingCounter = () => ({ type: C.INCREASING_COUNTER });

export const clearGreeting = () => ({ type: C.CLEAR_GREETING });
export const updateGreeting = (message) => ({ type: C.UPDATE_GREETING, message });

export const changeLanguage = (locale) => ({ type: C.CHANGE_LANGUAGE, locale });
