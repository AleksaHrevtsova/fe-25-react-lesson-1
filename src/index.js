import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
// import App from './App'
import MyApp from './App'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import s from './redux/store'
import { PersistGate } from 'redux-persist/integration/react'
const { store, persistor } = s

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor} loading={null}>
      <Router>
        <React.StrictMode>
          {/* <App /> */}
          <MyApp />
        </React.StrictMode>
      </Router>
    </PersistGate>
  </Provider>,
  document.getElementById('root'),
)
