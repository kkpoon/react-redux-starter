import * as C from "./constants";

interface IncreaseCounterAction {
  type: C.INCREASE_COUNTER;
}

interface IncreaseCounterAsyncAction {
  type: C.INCREASE_COUNTER_ASYNC;
}

interface IncreasingCounterAction {
  type: C.INCREASING_COUNTER;
}

interface ClearGreetingAction {
  type: C.CLEAR_GREETING;
}

interface UpdateGreetingAction {
  type: C.UPDATE_GREETING;
  message: string;
}

interface ChangeLanguageAction {
  type: C.CHANGE_LANGUAGE;
  locale: string;
}

export const increaseCounter = (): IncreaseCounterAction  => ({ type: "INCREASE_COUNTER" });
export const increaseCounterAsync = (): IncreaseCounterAsyncAction => ({ type: "INCREASE_COUNTER_ASYNC" });
export const increasingCounter = (): IncreasingCounterAction => ({ type: "INCREASING_COUNTER" });

export const clearGreeting = (): ClearGreetingAction => ({ type: "CLEAR_GREETING" });
export const updateGreeting = (message: string): UpdateGreetingAction => ({ type: "UPDATE_GREETING", message });

export const changeLanguage = (locale: string): ChangeLanguageAction => ({ type: "CHANGE_LANGUAGE", locale });
