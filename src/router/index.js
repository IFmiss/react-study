import React from 'react'
import {BrowserRouter as Router, Route, NavLink, Link, Prompt} from 'react-router-dom'
import Todo from './../todolist/todo'
import ClickCount from './../clickcount/index'
import MyRedirect from './../redirect/index'
import PropTypes from 'prop-types'
class MyRoute extends React.Component{
  /**
   * 基本使用方法，声明contextTypes，在函数或者render中通过this.context调用
   */
  static childContextTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.string.isRequired
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
            </ul>
            <div>
              <Route path="/todo" component={Todo}></Route>
              <Route path="/click" component={ClickCount}></Route>
              <Route path="/redirect" component={MyRedirect}></Route>
            </div>
          </div>
        </Router>
      </div>
    )
  }
}

export default MyRoute