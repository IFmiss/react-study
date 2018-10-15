import React from 'react'
import { render } from 'react-dom'
import Search from './search'
import List from './list'
class Todo extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      listInfo: []
    }
  }
  setData = (data) => {
    let arr = this.state.listInfo
    arr.push(data)
    this.setState ({
      listInfo: arr
    })
  }
  render () {
    return (
      <div>
        <Search setData={this.setData}/>
        <List listData = {this.state.listInfo}/>
      </div>
    )
  }
}

export default Todo