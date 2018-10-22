import React from 'react'

class ListInfoDetail extends React.Component{
  render () {
    const {onClick, todos} = this.props
    return (
      <div>
        {
          todos.map(todo => {
            return (
              <li style={{
                    textDecoration: todo.completed ? 'line-through' : 'none'
                  }}
                  key={todo.id}
                  {...todo}
                  onClick={e=>{
                    e.preventDefault()
                    onClick(todo)
                  }}>
                {todo.text}
              </li>
            )
          })
        }
      </div>
    )
  }
}
export default ListInfoDetail