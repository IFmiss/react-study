import {createStore} from 'redux'
import todoApp from './../reduces/reduces'

const store = createStore(todoApp)

export default store
