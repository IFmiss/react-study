import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import TestRender from './../demo/test-render'

class VVV extends React.Component{
  constructor(props) {
    super()
    console.log(props)
  }
  render () {
    return(
      <h1>Hello !{this.props.match.path}</h1>
    )
  }
}

class TestRouter extends React.Component{
  render () {
    return (
      <Router basename="/user">
        <div>
          111
          <Route path="/hi" component={() => (<h1>this is hi</h1>)} />
          <Route path="/a" component={() => (<h1>this is a</h1>)} />
          <Route path="/vvvv" component={VVV} />
        </div>
      </Router>
    )
  }
}

export default TestRouter
