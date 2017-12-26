import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import reducers from './reducers'
import { createStore } from 'redux'
import './index.css'
import App from './App'

import registerServiceWorker from './registerServiceWorker';
let store = createStore(reducers)

ReactDOM.render(<App />, document.getElementById('root'))

registerServiceWorker()
