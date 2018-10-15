import React from 'react'
import {Route} from 'react-router-dom'
import Todo from './../todolist/todo'
class MainContent extends React.Component{
  render () {
    return (
      <div>
        <Route path="/todo" component={Todo}/>
      </div>
    )
  }
}

export default MainContent