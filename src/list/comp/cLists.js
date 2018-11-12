import React from 'react'
import {connect} from 'react-redux'
import List from './list'

const mapStateToProps = (state, ownProps) => {
  return {
    lists: state
  }
}

const CList = connect(mapStateToProps, null)(List)
export default CList