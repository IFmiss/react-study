import http from './../../utils/http'
// http.get('/search?keywords=%E6%B5%B7%E9%98%94%E5%A4%A9%E7%A9%BA').then(res => {
  
// })
let nextTodoId = 0
export const addTodo = text => {
  let id = nextTodoId++
  console.log('id', id)
  return {
    type: 'ADD_TODO',
    id,
    text
  }
}

export const setVisibilityFilter = filter => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}

export const toggleTodo = id => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}