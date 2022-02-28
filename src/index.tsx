import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import reportWebVitals from './reportWebVitals'
import GlobalStyles from './styles/global'
import { createStore } from 'redux'
import rootReducer from './redux/reducers'
import { Provider } from 'react-redux'

const moviesStore = createStore(
  rootReducer,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <Provider store={moviesStore}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

reportWebVitals()
