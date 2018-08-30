import React from 'react'
import ReactDOM from 'react-dom'
const appRoot = document.getElementById('app-root')
const modalRoot = document.getElementById('modal-root')

class Modal extends React.Component{
  constructor (props) {
    super(props)
    this.el = document.createElement('div')
  }
  
  componentDidMount () {
    this.el.className = 'aaa'
    modalRoot.appendChild(this.el)
  }

  componentWillUnmount () {
    modalRoot.removeChild(this.el)
  }

  render () {
    return ReactDOM.createPortal(
      this.props.children,
      this.el
    )
  }
}

class Parent extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      click: 0
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    console.log(this.state.click)
    this.setState((prevState) => ({
      click: prevState.click + 1
    }))
    console.log(this.state.click)
  }

  render () {
    return (
      <div onClick={this.handleClick}>
        <p>Number of click: {this.state.click}</p>
        <p>this is a test aaaaaa !</p>
        <Modal>
          <Child/>
        </Modal>
      </div>
    )
  }
}

function Child () {
  return (
    <div className="child">
      <button>click</button>
    </div>
  )
}

ReactDOM.render(
  <Parent/>,
  appRoot
)