import React from 'react';
export function ActionLink () {
  function handleClick (e) {
    e.preventDefault();
    alert(e)
  }
  return (
    <button onClick={handleClick}>
      just click
    </button>
  )
}
export class Toggle extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      isToggleOn: true,
      name: 'daiwei'
    }
    this.handleClick = this.handleClick
  }
  handleClick = () => {
    this.setState((prevState) => 
    ({
      isToggleOn: !prevState.isToggleOn,
      name: 'aaaaaaa'
    }))
  }
  render() {
    return(
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' + this.state.name : 'OFF' + this.state.name}
      </button>
    )
  }
}

export class LoggingButton extends React.Component{
  handleClick () {
    console.log(`this is:`, this)
  }
  render () {
    return (
      <button onClick={this.handleClick.bind(this)}>
        Click Me
      </button>
    )
  }
}

