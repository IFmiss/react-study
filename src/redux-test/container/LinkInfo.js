import {connect} from 'react-redux'
import Link from './../components/Link'
import {setVisibility} from './../actions'

// import VisibilityFilters from './../actions'

const mapStateToProps = (state, ownprops) => {
  return {
    active: state.visibilityFilter === ownprops.filter
  }
}

const mapDispatchToProps = (dispatch, ownprops) => {
  return {
    onClick: () => {
      return dispatch(setVisibility(ownprops.filter))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)
