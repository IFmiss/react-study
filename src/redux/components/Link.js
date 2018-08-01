import React from 'react'
import propType from 'prop-types'

const Link = ({ active, children, onClick }) => {
  if (active) {
    return <span>{ children }</span>
  }
  return (
    <a
      href=""
      onClick={ e => {
        e.preventDefault()
        onClick()
      }}>
      {children}
    </a>
  )
} 
Link.propType = {
  active: propType.bool.isRequired,
  children: propType.node.isRequired,
  onClick: propType.func.isRequired
}

export default Link