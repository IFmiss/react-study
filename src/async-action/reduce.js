import { combineReducers } from 'redux'
function fetchData (state = {
  isFetch: false,
  data: {},
  error: ''
}, action) {
  switch (action.type) {
    case 'FETCH_POSTS':
      return Object.assign({}, state, {
        isFetch: true
      })
    case 'FETCH_ERROR':
      return Object.assign({}, state, {
        isFetch: false,
        error: action.error
      })
    case 'FETCH_SUCCESS':
      return Object.assign({}, state, {
        isFetch: false,
        data: action.data
      })
    default:
      return state
  }
}

const rootReduce = combineReducers({
  fetchData
})
export default rootReduce