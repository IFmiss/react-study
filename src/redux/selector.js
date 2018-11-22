import { createSelector } from 'reselect'
const getVisibilityFilter = state => state.visibilityFilter
const getTodos = state => state.todos

export const getVisibleTodos = createSelector(
  [getVisibilityFilter, getTodos],
  (visibilityFilter, todos) => {
    switch (visibilityFilter) {
      case 'SHOW_ALL':
        return todos
      case 'SHOW_COMPLETED':
        return todos.filter(t => t.complete)
      case 'SHOW_ACTIVE':
        return todos.filter(t => !t.complete)
      default:
        return todos
    }
  }
)

const getKeyword = state => state.keyword
export const getVisibleTodosFilteredByKeyword = createSelector(
  [getVisibleTodos, getKeyword],
  (visibilitytodos, keyword) => visibilitytodos.filter(
    todo => todo.text.indexOf(keyword) > -1
  )
)