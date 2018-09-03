import React from 'react'
class Search extends React.Component{
  constructor (props) {
    super(props)
  }
  onKeyDown = (e) => {
    this.onEnter(e)
  }
  onEnter = (e) => {
    if (e.keyCode !== 13) return
    this.props.setData(e.target.value)
    e.target.value = ''
  }
  render () {
    return <input type="text" placeholder="请输入内容，回车添加" onKeyDown={this.onKeyDown}/>
  }
}
export default Search