import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import './transition.css'
class TodoList extends React.Component{
  constructor (props) {
    super(props)
    this.state = {
      items: ['hello', 'world', 'click', 'me']
    }
  }
  handleAdd = () => {
    const newItems = this.state.items.concat([
      prompt('Enter some text')
    ])
    this.setState({
      items: newItems
    })
  }
  handleRemove = (i) => {
    let newItems = this.state.items.slice()
    newItems.splice(i, 1)
    this.setState({
      items: newItems
    })
  }
  
  render () {
    const item = this.state.items.map((item, i) => (
      <div key={i} onClick={this.handleRemove(i)}>
        {item}
      </div>
    ))
    return (
      <div>
        <button onClick={this.handleAdd}>
          AddItem
        </button>
        <ReactCSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={500}
          transitionAppear={true}
          transitionAppearTimeout={500}
          transitionLeaveTimeout={300}>
          {item}
        </ReactCSSTransitionGroup>
      </div>
    )
  }
}
export default TodoList