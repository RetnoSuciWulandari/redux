//these are exported to counterReducer.js, referring to the cases in the reducer function
export const MATH = "MATH";
export const RESET = "RESET";
export const MULTIPLICATION = "MULTIPLICATION";
export const DIVISION = "DIVISION";

//these are exported to CounterContainer.jsx, referring to the props in the render method
export const increment = () => ({ type: MATH, payload: +1 });

export const decrement = () => ({ type: MATH, payload: -1 });

export const reset = () => ({ type: RESET, payload: 0 });

export const multiplication = () => ({ type: MULTIPLICATION, payload: 10 });

export const division = () => ({ type: DIVISION, payload: 10 });
