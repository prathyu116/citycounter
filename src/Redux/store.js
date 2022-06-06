import { legacy_createStore as createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { TableReducer } from "./TableFeature/Reducer";

const rootReducer = combineReducers({
  TableData: TableReducer,
});


export const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);
