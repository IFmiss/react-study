import React from 'react';
export function Welcome (props) {
  return <h1 key={props.name}>Hello, {props.name}</h1>
}

export class MyName extends React.Component{
  render () {
    return <h1 key={this.props.name}> this is {this.props.name}</h1>
  }
}

export class TestWel extends React.Component{
  render() {
    let a = [{
      id: '111',
      name: 'daiwei'
    }, {
      id: '222',
      name: 'hahahah'
    }, {
      id: '3333',
      name: 'sdasd'
    }]
    return (
      <div>
        {
          a.map((data, i) => {
            return(
              <Welcome key={i} name={a[i].name}/>
            )
          })
        }
      </div>
    )
  }
}