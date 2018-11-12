import {AddList} from './../action'
function addTodo (state = [], action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        action.value,
        ...state
      ]
    default:
      return state
  }
}
export default addTodo