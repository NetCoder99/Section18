import { createStore } from "redux";

export const counterActions = {
  increment: "increment",
  decrement: "decrement",
  toggleDisplay: "toggleDisplay",
};

const initState = {
  counter: 0,
  showCount: true,
};

const counterReducer = (state = initState, action) => {
  if (action.type === counterActions.increment) {
    return { ...state, counter: state.counter + action.amount };
  }
  if (action.type === counterActions.decrement) {
    return {
      counter: state.counter - 1,
      showCount: state.showCount,
    };
  }
  if (action.type === counterActions.toggleDisplay) {
    let newState = {...state};
    newState.showCount = !newState.showCount;
    return {...newState};
  }

  return state;
};

const counterStore = createStore(counterReducer);
export default counterStore;
