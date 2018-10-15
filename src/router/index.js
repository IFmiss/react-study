import React from 'react'
import {BrowserRouter as Router, Route, NavLink, Link} from 'react-router-dom'
import Todo from './../todolist/todo'
class MyRoute extends React.Component{
  render () {
    return(
      <div>
        <Router>
          <div>
            <ul>
              <li>
                <NavLink to="/todo">todo</NavLink>
              </li>
              <li>
                <NavLink to="/">首页</NavLink>
              </li>
              <li>
                <NavLink to="/">个人中心</NavLink>
              </li>
              <li>
                <Link to="/todo">Link组件</Link>
              </li>
            </ul>
            <div>
              <Route path="/todo" component={Todo}/>
            </div>
          </div>
        </Router>
      </div>
    )
  }
}

export default MyRoute