import React from 'react'
class Cat extends React.Component{
  render() {
    const {mouse} = this.props
    return (
      <div className='move-cat'
           style={{
             position: 'absolute',
             top: mouse.y,
             left: mouse.x,
             transform: 'translate(-50%, -50%, 0)',
             width: '10px',
             borderRadius: '50%',
             height: '10px',
             background: 'red'
           }}></div>
    )
  }
}

class Mouse extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      x: 0,
      y: 0
    }
  }
  move = (e) => {
    this.setState({
      x: e.pageX - e.target.offsetLeft,
      y: e.pageY - e.target.offsetTop,
    })
  }
  render() {
    return (
      <div onMouseMove={this.move} style={{
        position: 'relative',
        border: '1px solid #aaa',
        width: '500px',
        height: '300px'
      }}>
        {this.props.render(this.state)}
      </div>
    )
  }
}

export default class TestRenderProp extends React.Component{
  render() {
    return(
      <div>
        <Mouse render={(mouse) => (
          <Cat mouse={mouse}/>
        )}>
        </Mouse>
      </div>
    )
  }
}