import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import TodoList from '../components/TodoList'
import {createSelector} from 'reselect'
const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed)
    case 'SHOW_ALL':
    default:
      return todos
  }
}

// const getTodos = state => state.todos
// const getVisibilityFilter = state => state.visibilityFilter
// const getKeyword = (state) => state.keyword
// const getVisibleTodos = createSelector(
//   getTodos,
//   getVisibilityFilter,
//   getKeyword,
//   (todos, visibilityFilter, keywords) => {
//     switch (visibilityFilter) {
//       case 'SHOW_COMPLETED':
//         return todos.filter(t => t.completed)
//       case 'SHOW_ACTIVE':
//         return todos.filter(t => !t.completed)
//       case 'SHOW_ALL':
//       default:
//         return todos
//     }
//   }
// )

const mapStateToProps = state => {
  return {
    todos: getVisibleTodos(state.todos.present, state.visibilityFilter)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTodoClick: id => {
      dispatch(toggleTodo(id))
    }
  }
}

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default VisibleTodoList
