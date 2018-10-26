import React from 'react'
import TestRender from './testrender'
class RenderForm extends React.Component{
  constructor(props){
    super(props)
    this.inputName
    this.age
    this.state = {
      listData: []
    }
  }
  onSubmit = (e) => {
    e.preventDefault()
    if (this.inputName.value && this.age.value) {
      let obj = {
        name: this.inputName.value,
        age: this.age.value
      }
      this.setState((prevState) => (
        {
          listData: [...prevState.listData, obj]
        }
      ))
      console.log(this.state.listData)
    }
  }
  render() {
    return(
      <form>
        <input type="text" ref={ node =>this.inputName = node }/>
        <input type="text" ref={ node =>this.age = node }/>
        <input type="button" value="添加" onClick={this.onSubmit}/>
        <div>
          {
            this.state.listData.map((item, index) => (
              <TestRender key={index} name={item.name} age={item.age}/>
            ))
          }
        </div>
      </form>
    )
  }
}
export default RenderForm