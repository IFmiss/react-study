let nextTodoId = 0

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

// 添加
export function addList (text) {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
  }
}

export function toggleTodo (index) {
  return {
    type: 'TOGGLE_TODO',
    index
  }
}

export function setVisibility (filter) {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}