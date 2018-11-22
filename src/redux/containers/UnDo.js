import React from 'react'
import { ActionCreators as UndoActionCreators } from 'redux-undo'
import { connect } from 'react-redux'

class UnDo extends React.Component{
  render () {
    const { canUndo, canRedo, onUndo, onRedo } = this.props
    return (
      <p>
        <button onClick={onUndo} disabled={!canUndo}>
          撤销
        </button>
        <button onClick={onRedo} disabled={!canRedo}>
          反撤销
        </button>
      </p>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    canUndo: state.todos.past.length > 0,
    canRedo: state.todos.future.length > 0
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onUndo: () => dispatch(UndoActionCreators.undo()),
    onRedo: () => dispatch(UndoActionCreators.redo())
  }
}

const UnDoC = connect(
  mapStateToProps,
  mapDispatchToProps
)(UnDo)

export default UnDoC
