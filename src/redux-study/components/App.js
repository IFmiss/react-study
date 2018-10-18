import React from 'react'
import Footer from './Footer'
import AddTodo from './../container/AddTodo'
import VisibilityTodoList from './../container/VisibleTodoList'

const App = () => {
  return (
    <div>
      <AddTodo/>
      <VisibilityTodoList/>
      <Footer/>
    </div>
  )
}

export default App