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
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userReducer from "./reducers/userReducers";
import allUsersReducer from "./reducers/allUsersReducer";

// const rootReducer = combineReducers({
//   user: userReducer,
//   allUsers: allUsersReducer,
// });

// const store = configureStore({
//   reducer: rootReducer,
// });

const store = configureStore({
  reducer: {
    user: userReducer,
    allUsers: allUsersReducer,
  },
});

export default store;
