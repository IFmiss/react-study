import React from 'react'
import LinkInfo from './../container/LinkInfo'
import {VisibilityFilters} from './../actions'
class Footer extends React.Component{
  render () {
    return(
      <div>
        <span>
          Show:
        </span>
        <LinkInfo filter={VisibilityFilters.SHOW_ALL}/>
        <LinkInfo filter={VisibilityFilters.SHOW_ACTIVE}/>
        <LinkInfo filter={VisibilityFilters.SHOW_COMPLETED}/>
      </div>
    )
  }
}

export default Footer