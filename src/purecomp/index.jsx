import React from 'react'
// import Im from 'immutable'
class CounterButton extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      count: 1
    }
  }

  clickHandler = () => {
    this.setState((prevState, props) => ({
      count: prevState.count + 1
    }))
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.color !== nextProps.color) return true
    if (this.state.count !== nextState.count) return true
    return false
  }

  render() {
    return(
      <div style={{background: this.props.color}}>
        <span>CounterButton: {this.state.count}</span>
        <input type="button" onClick={this.clickHandler} value="点击更新"/>
      </div>
    )
  }
}

export {
  CounterButton
}