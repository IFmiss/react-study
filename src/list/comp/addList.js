import React from 'react'
import {connect} from 'react-redux'
import {AddList} from './../action'
class AddListComp extends React.Component{
  constructor(props) {
    super(props)
  }
  addList = () => {
    if (this.input.value.length > 0) {
      this.props.dispatch(AddList(this.input.value))
    }
  }
  render () {
    return (
      <div>
        <input type="text" ref={node => this.input = node}/>
        <button onClick={this.addList}>添加</button>
      </div>
    )
  }
}

AddListComp = connect()(AddListComp)
export default AddListComp