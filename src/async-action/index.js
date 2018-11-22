import Image from './Image'
import React from 'react'
import {render} from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import reducer from './reduce'
import rootSaga from './sagas'
import createSagaMiddleware from 'redux-saga'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(rootSaga)

function renderDom () {
  render(
    <Image value={store.getState()} getImageData={() => {
      store.dispatch({
        type: 'FETCH_REQUEST',
        url: 'http://www.daiwei.org/vue/server/home.php?inAjax=1&do=getImageByBingJson'
      })
    }}/>,
    document.getElementById('async')
  )
}

renderDom()
store.subscribe(renderDom)