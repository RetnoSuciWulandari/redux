import { MATH, RESET, DIVISION, MULTIPLICATION } from "./actions";

export const initialCounter = {
  count: 0
};

export function counterReducer(state = initialCounter, action) {
  switch (action.type) {
    case MATH:
      return {
        count: state.count + action.payload
      };
    case MULTIPLICATION:
      return {
        count: state.count * 10
      };
    case DIVISION:
      return {
        count: Math.round(state.count / 10)
      };
    case RESET:
      return {
        count: 0
      };
    default:
      return state;
  }
}
