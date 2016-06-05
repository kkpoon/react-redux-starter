import { INCREASE, INCREASE_ASYNC, INCREASING } from "../";

export const increase = () => ({ type: INCREASE });

export const increaseAsync = () => ({ type: INCREASE_ASYNC });

export const increasing = () => ({ type: INCREASING });
