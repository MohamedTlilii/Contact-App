import { createStore } from "redux";
import contactReducer from "./reducers/contactReducer";

const store = createStore(
  contactReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
