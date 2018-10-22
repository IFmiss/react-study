import React from 'react'

class AddList extends React.Component{
  render () {
    const {onSubmit} = this.props
    let input
    return(
      <form onSubmit={e=>{
        e.preventDefault()
        if (input.value.trim() === '') return
        onSubmit(input.value)
        input.value = ''
      }}>
        <input ref={node => input = node}/>
        <button type='submit'>
          点击提交
        </button>
      </form>
    )
  }
}

export default AddList