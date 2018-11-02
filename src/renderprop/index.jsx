import React from 'react'
class MouseReacker extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      x: 0,
      y: 0
    }
  }

  move = (e) => {
    this.setState({
      x: e.pageX - e.target.offsetLeft,
      y: e.pageY - e.target.offsetTop
    })
  }

  render () {
    return (
      <div style={{
        width: '600px',
        height: '500px',
        border: '1px solid red',
        position: 'relative',
        overflow: 'hidden'
      }} onMouseMove={this.move}>
        <h1>just move mouse</h1>
        <span style={{
          position: 'absolute',
          top: this.state.y,
          left: this.state.x,
          width: '10px',
          height: '10px',
          transform: 'translate(-50%, -50%, 0)',
          borderRadius: '50%',
          background: 'red'
        }}></span>
        <p>The current mouse position is ({this.state.x}, {this.state.y})</p>
      </div>
    )
  }
}

export default MouseReacker