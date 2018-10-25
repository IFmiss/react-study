import React from 'react'
import {BrowserRouter as Router, Route, NavLink, Link, Prompt} from 'react-router-dom'
import Todo from './../todolist/todo'
import ClickCount from './../clickcount/index'
import MyRedirect from './../redirect/index'
import PropTypes from 'prop-types'
import TestLifereCycle from './../liferecycle'
import {MyCreateRef, RefChild} from './../liferecycle/createRef'
import { findDOMNode } from 'react-dom'
import TestDom from './../liferecycle/dom'
class MyRoute extends React.Component{
  constructor (props) {
    super(props)
    this.myRef = React.createRef()
  }
  /**
   * 基本使用方法，声明contextTypes，在函数或者render中通过this.context调用
   */
  static childContextTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.string.isRequired
  }
  componentDidMount () {
    console.log('MyRoute mounted: ')
    console.log(this.myRef.current)
    console.log('findDOMNode(this.myRef.current)', findDOMNode(this.myRef.current))
  }
  /**
   * getChildContext 指定的传递给子组件的属性需要先通过 childContextTypes 来指定，不然会产生错误。
   */
  getChildContext = () => {
    return {
      name: "daiwei hahaha",
      age: "19"
    }
  }
  getConfirmation = (message, callback) => {
    const allowTransition = window.confirm(message)
    callback(allowTransition)
  }
  render () {
    return(
      <div>
        <Router basename="/s">
          <div>
            <ul>
              <li>
                <NavLink to="/todo" activeStyle={{ color: 'green', fontWeight: 'bold' }}>todo</NavLink>
              </li>
              <li>
                <NavLink to="/">首页</NavLink>
              </li>
              <li>
                <Link to="/redirect">redirect</Link>
              </li>
              <li>
                <Link to={
                  {
                    pathname: "/click",
                    search: "?name=daiwei",
                    state: { price: 18 }
                  }
                }>click</Link>
              </li>
              <li>
                <Link to="/life">life</Link>
              </li>
              <li>
                <Link to="/ref">createRef</Link>
              </li>
              <li>
                <Link to="/dom">dom</Link>
              </li>
            </ul>
            <div>
              <Route path="/todo" component={Todo}></Route>
              <Route path="/click" component={ClickCount}></Route>
              <Route path="/redirect" component={MyRedirect}></Route>
              <Route path="/life" render={() => <TestLifereCycle/>}/>
              {/* <Route path="/ref" component={MyCreateRef}/> */}
              <Route path="/ref" render={() => (
                <div>
                  <MyCreateRef />
                  <RefChild ref={this.myRef}>
                    点击我
                  </RefChild>
                </div>
              )}/>

              <Route path='/dom' children={() => <TestDom />}/>
            </div>
          </div>
        </Router>
      </div>
    )
  }
}

export default MyRoute