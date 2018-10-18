import React from 'react'
import FilterLink from './../container/FilterLink'

class Footer extends React.Component{
  render () {
    return(
      <p>
        show:
        {' '}
        <FilterLink filter='SHOW_ALL'>
          SHOW_ALL
        </FilterLink>
        {' , '}
        <FilterLink filter='SHOW_COMPLETED'>
          SHOW_COMPLETED
        </FilterLink>
        {' , '}
        <FilterLink filter='SHOW_ACTIVE'>
          SHOW_ACTIVE
        </FilterLink>
      </p>
    )
  }
}

export default Footer