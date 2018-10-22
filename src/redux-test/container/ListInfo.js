// 用于显示中间的数据列表内容
import {connect} from 'react-redux'
import {toggleTodo} from './../actions'
import ListInfoDetail from './../components/ListInfoDetail'

const getVisibilityTodos = (todos, filter) => {
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

const mapStateToProps = (state) => {
  return {
    todos: getVisibilityTodos(state.todos, state.visibilityFilter)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (todos) => {
      return dispatch(toggleTodo(todos.id))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListInfoDetail)