import React from 'react'
import { render } from 'react-dom'
// import { Provider } from 'react-redux'
// import { createStore } from 'redux'
// import todoApp from './redux/reducers'
// import App from './redux/components/App'
import TestRouter from './config/router'

// let store = createStore(todoApp)
// render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('root')
// )
render (
  <TestRouter />,
  document.getElementById('root')
)