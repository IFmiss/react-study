import React from 'react'
class ClickCount extends React.Component{
  constructor (props) {
    super(props)
    this.state = {
      count: 0
    }
  }
  calcCount = () => {
    this.setState(prev => (
      {
        count: prev.count + 1
      }
    ))
  }
  render () {
    return (
      <div>
        <span>点击的数量: {this.state.count}</span>
        <button onClick={this.calcCount}>点击我</button>
      </div>
    )
  }
  componentDidMount () {
    console.log(this.props)
  }
}

export default ClickCount
