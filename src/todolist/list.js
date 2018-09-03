import React from 'react'
class List extends React.Component{
  constructor (props) {
    super(props)
  }
  render () {
    return (
      <ul>
        {
          this.props.listData.map((item, index) => (
              <li key={index}>{item}</li>
          ))
        }
      </ul>
    )
  }
}

export default List
