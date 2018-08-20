import React from 'react'
import {
  BrowserRouter,
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
  constructor (props) {
    super()
    this.state = {
      supportsHistory: 'pushState' in window.history
    }
  }
  render () {
    return (
      <BrowserRouter forceRefresh={!this.state.supportsHistory} basename="/user">
        <div>
          <Link to="/react" />
          <Route path="/hi" component={() => (<h1>this is hi</h1>)} />
          <Route path="/a" component={() => (<h1>this is a</h1>)} />
          <Route path="/vvvv" component={VVV} />
        </div>
      </BrowserRouter>
    )
  }
}

export default TestRouter
