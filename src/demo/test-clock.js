import React from 'react';
import ReactDOM from 'react-dom';
export class Tick extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      date: new Date()
    }
  }
  componentDidMount () {
    console.log(this)
    this.timerID = setInterval(
      () => this.clock(),
      1000
    );
  }
  componentWillUnmount () {
    clearInterval(this.timerID)
  }
  clock () {
    this.setState({
      date: new Date()
    })
  }

  activateLasers (_this) {
    clearInterval(_this.timerID)
  }

  render() {
    return(
      <div key="1" onClick={this.activateLasers.bind(this)}>
        <h2>its {this.state.date.toLocaleTimeString()}</h2>
      </div>
    )
  }
}

function Ele () {
  return (
    <div>
      <Tick/>
      <Tick/>
      <Tick/>
    </div>
  )
}

export function clock () {
  ReactDOM.render(
    <Ele/>,
    document.getElementById('root')
  );
}