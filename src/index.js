import React from 'react'
import { render } from 'react-dom'
// import { Provider } from 'react-redux'
// import { createStore } from 'redux'
// import todoApp from './redux/reducers'
// import App from './redux/components/App'
import TestRouter from './config/router'
import App from './demo/route'
import FileInput from './demo/file'
import PreF from './demo/performance'
import Todo from './todolist/todo'

import Parent from './demo/portals'

import { clock } from './demo/test-clock'
// let store = createStore(todoApp)
// render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('root')
// )

// render (
//   <TestRouter />,
//   document.getElementById('root')
// )
// render (
//   <FileInput/>,
//   document.getElementById('root')
// )

render (
  <Todo/>,
  document.getElementById('root')
)
// clock()