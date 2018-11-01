import React from 'react'
import ReactDOM from 'react-dom'
// const appRoot = document.getElementById('app-root')
const modalRoot = document.getElementById('modal-root')

class Modal extends React.Component{
  constructor (props) {
    super(props)
    this.el = document.createElement('div')
  }

  componentDidMount () {
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

class Parent extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }

  handleClick = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1
    }))
  }

  render () {
    return (
      <div onClick={this.handleClick} style={{
        background: 'red'
      }}>
        <p>Number of Clicks: {this.state.count}</p>
        <p>
          Open up the browser DevTools
          to observe that the button
          is not a child of the div
          with the onClick handler.
        </p>
        <Modal>
          <div className="modal">
            <button>Click</button>
          </div>
        </Modal>
      </div>
    )
  }
}

export default Parent