import React from 'react'
class TestRender extends React.Component{
  render() {
    console.log('我 re-render 了')
    const { name, age } = this.props
    return(
      <div>
        <span>姓名：</span>
        <span>{name}</span>
        <span>年龄：</span>
        <span>{age}</span>
      </div>
    )
  }
}
export default TestRender