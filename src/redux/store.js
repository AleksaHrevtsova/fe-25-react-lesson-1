// ================== BEFORE TOOLKIT
// import { createStore, combineReducers } from "redux";

// const rootReducer = combineReducers({
//   user: userReducer,
//   allUsers: allUsersReducer,
// });

// const store = createStore(
//   rootReducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

// export default store;

// ================== AFTER
import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import userReducer from "./reducers/userReducers";
import allUsersReducer from "./reducers/allUsersReducer";
import logger from "redux-logger";

const rootReducer = combineReducers({
  user: userReducer,
  allUsers: allUsersReducer,
});

const middleware = [...getDefaultMiddleware(), logger];

const store = configureStore({
  reducer: rootReducer,
  middleware,
  devTools: process.env.NODE_ENV === "development",
});

// const store = configureStore({
//   reducer: {
//     user: userReducer,
//     allUsers: allUsersReducer,
//   },
//   middleware: [...getDefaultMiddleware(), logger],
//   devTools: process.env.NODE_ENV === "development",
// });
// console.log(getDefaultMiddleware());

export default store;
