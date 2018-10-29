import React from 'react'
class FancyBorder extends React.Component{
  render() {
    return(
      <div className={'FancyBorder FancyBorder-' + this.props.color}
           style={{border: `5px solid ${this.props.color}`}}>
        {this.props.children}
      </div>
    )
  }
}

class WelcomeDialog extends React.Component{
  render () {
    return (
      <FancyBorder color="red">
        <h1 className="title">这是title</h1>
        <p className="content">这是一个组件的内容信息哈哈哈哈哈哈哈</p>
      </FancyBorder>
    )
  }
}

class Dialog extends React.Component{
  render() {
    return(
      <FancyBorder color="blue">
        <h1>{this.props.title}</h1>
        <p>{this.props.message}</p>
        {this.props.children}
      </FancyBorder>
    )
  }
}

class signUpDialog extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      login: ''
    }
  }
  handleClick = (e) => {
    alert('welcome to react --- ' + this.state.login)
  }
  handleChange = (e) => {
    this.setState({
      login: e.target.value
    })
  }
  render() {
    return(
      <Dialog title="react extends"
              message="填写你要写的内容信息">
        <input type="text" value={this.state.login} onChange={this.handleChange}/>
        <input type="button" value="点击我" onClick={this.handleClick}/>
      </Dialog>
    )
  }
}

export {
  WelcomeDialog,
  signUpDialog
}