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
} from '@reduxjs/toolkit'
import userReducer from './reducers/userReducers'
import allUsersReducer from './reducers/allUsersReducer'
import logger from 'redux-logger'
import authReducer from './auth/reducers'

import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const config = {
  key: 'zuzuzuzu',
  storage,
  whitelist: ['token'],
}

const rootReducer = combineReducers({
  user: userReducer,
  allUsers: allUsersReducer,
  auth: persistReducer(config, authReducer),
})

const middleware = [...getDefaultMiddleware(), logger]

const store = configureStore({
  reducer: rootReducer,
  middleware,
  devTools: process.env.NODE_ENV === 'development',
})

// const store = configureStore({
//   reducer: {
//     user: userReducer,
//     allUsers: allUsersReducer,
//   },
//   middleware: [...getDefaultMiddleware(), logger],
//   devTools: process.env.NODE_ENV === "development",
// });
// console.log(getDefaultMiddleware());
const persistor = persistStore(store)
export default {store, persistor}
