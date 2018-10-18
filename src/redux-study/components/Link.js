import React from 'react'
import PropTypes from 'prop-types'

class Link extends React.Component{
  render () {
    const {active, children, onClick} = this.props
    if (active) {
      return <span>{children}</span>
    }
    return (
      <a href=""
         onClick={e => {
           e.preventDefault()
           onClick()
         }}>
         {children}
      </a>
    )
  }
}

Link.PropTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Link
