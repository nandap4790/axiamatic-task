import { legacy_createStore } from "redux";

import listReducer from "./reducer";

export const store = legacy_createStore(listReducer);