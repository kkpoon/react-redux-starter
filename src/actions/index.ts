import * as C from "./constants";

export interface IncreaseCounterAction {
  type: C.INCREASE_COUNTER;
}

export interface IncreaseCounterAsyncAction {
  type: C.INCREASE_COUNTER_ASYNC;
}

export interface IncreasingCounterAction {
  type: C.INCREASING_COUNTER;
}

export interface ClearGreetingAction {
  type: C.CLEAR_GREETING;
}

export interface UpdateGreetingAction {
  type: C.UPDATE_GREETING;
  message: string;
}

export interface ChangeLanguageAction {
  type: C.CHANGE_LANGUAGE;
  locale: string;
}

export const increaseCounter = (): IncreaseCounterAction  => ({ type: "INCREASE_COUNTER" });
export const increaseCounterAsync = (): IncreaseCounterAsyncAction => ({ type: "INCREASE_COUNTER_ASYNC" });
export const increasingCounter = (): IncreasingCounterAction => ({ type: "INCREASING_COUNTER" });

export const clearGreeting = (): ClearGreetingAction => ({ type: "CLEAR_GREETING" });
export const updateGreeting = (message: string): UpdateGreetingAction => ({ type: "UPDATE_GREETING", message });

export const changeLanguage = (locale: string): ChangeLanguageAction => ({ type: "CHANGE_LANGUAGE", locale });
