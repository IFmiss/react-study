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