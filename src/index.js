import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import {
  createStore,
  applyMiddleware,
  compose,
} from 'redux'
import thunk from 'redux-thunk'


import reducers from './reducers'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const middlewares = [thunk]

const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(...middlewares)),
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
)

registerServiceWorker()
