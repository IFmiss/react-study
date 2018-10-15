import React from 'react'
import {BrowserRouter as Router, Route, NavLink, Link, Prompt} from 'react-router-dom'
import Todo from './../todolist/todo'
import ClickCount from './../clickcount/index'
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
                {/* <Redirect to="/somewhere/else" /> */}
              </li>
              <li>
                <Link to="/click">click</Link>
              </li>
            </ul>
            <div>
              <Route path="/todo" component={Todo}></Route>
              <Route path="/click" component={ClickCount}></Route>
            </div>
          </div>
        </Router>
      </div>
    )
  }
}

export default MyRoute