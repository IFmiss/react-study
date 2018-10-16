import React from 'react'
import { connect } from 'react-redux'
class Count extends React.Component{
  render(){
    const {value, onIncreaseClick} = this.props
    return(
      <div>
        <span>{value}</span>
        <button onClick={onIncreaseClick}>Increase</button>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    value: state.count
  }
}

function mapDispatchToProps (dispatch) {
  return {
    onIncreaseClick: () => dispatch({ type: 'increase' })
  }
}

const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(Count)

export default App