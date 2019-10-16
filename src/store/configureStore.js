import { createStore, combineReducers } from "redux";
import canvasReducer from "../reducers/canvas";

export default () => {
  let reducers = combineReducers({
    canvas: canvasReducer
  });

  const store = createStore(
    reducers
  );

  return { store };
};
