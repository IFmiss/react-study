import AddList from './addList'
import React from 'react'
import Clists from './cLists'
class App extends React.Component{
  render() {
    return(
      <div>
        <AddList/>
        <Clists/>
      </div>
    )
  }
}
export default App