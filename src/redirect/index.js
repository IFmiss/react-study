import React from 'react'
import {Redirect, Prompt} from 'react-router-dom'
class MyRedirect extends React.Component{
  constructor (props) {
    super(props)
    this.state = {
      showRedirect: false,
      time: 0
    }
  }
  clickRedirect = () => {
    this.setState({
      time: 3
    })

    setTimeout((function(){
      this.setState({
        showRedirect: true,
      })
    }).bind(this), 3000)
  }
  render() {
    let RedirectHtml
    if (this.state.showRedirect) {
      RedirectHtml = (
        <Redirect to="https://www.daiwei.org"/>
      )
    }
    return(
      <div>
        <Prompt message="确定要离开？" />
        {RedirectHtml}
        <h1>
          预计将在{this.state.time}s之后跳转
        </h1>
        <button onClick={this.clickRedirect}>
          点击跳转
        </button>
      </div>
    )
  }
}
export default MyRedirect