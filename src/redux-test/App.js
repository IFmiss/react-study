import React from 'react'
import AddTodo from './container/AddTodo'
import ListInfo from './container/ListInfo'
import Footer from './components/Footer'

class App extends React.Component{
  render(){
    return (
      <div>
        <AddTodo/>
        <ListInfo/>
        <Footer/>
      </div>
    )
  }
}
export default App