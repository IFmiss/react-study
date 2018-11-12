import React from 'react'
import {render} from 'react-dom'
import store from './store'
import APP from './comp/app'
import { Provider } from 'react-redux'

render(
  <Provider store={store}>
    <APP/>
  </Provider>,
  document.getElementById('redux')
)
