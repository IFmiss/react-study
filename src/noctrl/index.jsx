import React from 'react'
class NameForm extends React.Component{
  constructor(props) {
    super(props)
  }
  handleClick = (e) => {
    e.preventDefault()
    alert(this.input.value)
  }
  render() {
    return (
      <div>
        <input type="text" defaultValue="Bob" ref={node=>this.input = node}/>
        <button onClick={this.handleClick}>非控制组件</button>
      </div>
    )
  }
}

class FileInput extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      filetext: ''
    }
  }
  subFile = (e) => {
    e.preventDefault()
    this.setState({
      filetext: this.input.files[0].name
    })
  }
  render() {
    return(
      <div>
        <input type="file" ref={file=>this.input = file}/>
        <button onClick={this.subFile}>subFile</button>
        <p>fileText: {this.state.filetext}</p>
      </div>
    )
  }
}

export {
  NameForm,
  FileInput
}