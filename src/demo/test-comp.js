import React from 'react';
export function Welcome (props) {
  return <h1 key={props.name}>Hello, {props.name}</h1>
}

export class MyName extends React.Component{
  render () {
    return <h1> this is {this.props.name}</h1>
  }
}