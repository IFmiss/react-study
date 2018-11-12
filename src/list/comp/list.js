import React from 'react'
class Lists extends React.Component{
  render () {
    const {lists} = this.props
    return(
      <div>
        {
          lists.map((item, index) => (
            <p key={index}>{item}</p>
          ))
        }
      </div>
    )
  }
}
export default Lists