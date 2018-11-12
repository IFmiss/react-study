import {createStore} from 'redux'
import addTodo from './reducer'

const store = createStore(addTodo)
export default store