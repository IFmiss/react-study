import React from 'react'
import { render } from 'react-dom'
// import { Provider } from 'react-redux'
// import { createStore } from 'redux'
// import todoApp from './redux/reducers'
// import App from './redux/components/App'
import MyRoute from './router/index'
render(
  <MyRoute/>,
  document.getElementById('root')
)