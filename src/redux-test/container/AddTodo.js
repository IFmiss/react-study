import {addList} from './../actions'
import { connect } from 'react-redux'
import AddList from './../components/AddList'

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (text) => dispatch(addList(text))
  }
}

export default connect(null , mapDispatchToProps)(AddList)