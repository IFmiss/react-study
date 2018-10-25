import React from 'react'
import { render } from 'react-dom'


// import {Provider} from 'react-redux'
// import {createStore} from 'redux'
// import Counter from './redux-demo/reducer'
// import App from './redux-demo/count'
// // import { Provider } from 'react-redux'
// // import { createStore } from 'redux'
// // import todoApp from './redux/reducers'
// // import App from './redux/components/App'
import MyRoute from './router/index'
render(
  <MyRoute/>,
  document.getElementById('root')
)

// let store = createStore(Counter)

// render(
//   <Provider store={store}>
//     <App/>
//   </Provider>,
//   document.getElementById('root')
// )

// =================redux-study
// import React from 'react'
// import { render } from 'react-dom'
// import { Provider } from 'react-redux'
// import { createStore } from 'redux'
// import todoApp from './redux-study/reduces/reduces'
// import App from './redux-study/components/App'

// let store = createStore(todoApp)
// render (
//   <Provider store={store}>
//     <App/>
//   </Provider>,
//   document.getElementById('root')
// )

// =================redux-text
// import React from 'react'
// import {render} from 'react-dom'
// import {Provider} from 'react-redux'
// import {createStore} from 'redux'
// import todoApp from './redux-test/reducer'
// import App from './redux-test/App'

// let store = createStore(todoApp)

// render(
//   <Provider store={store}>
//     <App/>
//   </Provider>,
//   document.getElementById('root')
// )