import React from 'react'
import { render } from 'react-dom'
import Search from './search'
import List from './list'
import PropTypes from 'prop-types'
class Todo extends React.Component{
  static contextTypes = {
    age: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }
  constructor(props){
    super(props)
    this.state = {
      listInfo: []
    }
  }
  setData = (data) => {
    alert(this.context.name)
    let arr = this.state.listInfo
    arr.push(data)
    this.setState ({
      listInfo: arr
    })
  }
  render () {
    return (
      <div>
        <p>{this.context.name}</p>
        <p>{this.context.age}</p>
        <Search setData={this.setData}/>
        <List listData = {this.state.listInfo}/>
      </div>
    )
  }
}

export default Todo