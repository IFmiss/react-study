import React from 'react'
import PropTypes from 'prop-types'

class Link extends React.Component{
  render() {
    const { onClick, filter, active } = this.props
    return (
      <span onClick={e=>{
        e.preventDefault()
        onClick()
      }}
        style={
          {
            color: active ? 'red' : '#333'
          }
        }>
        {filter}
      </span>
    )
  }
}
Link.PropTypes = {
  onClick: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired
}
export default Link