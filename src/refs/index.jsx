import React, { PureComponent } from 'react'
class CustomTextInput extends React.Component{
  constructor(props) {
    super(props)
    this.textInput = React.createRef()
  }
  focusTextInput = () => {
    this.textInput.current.focus()
  }
  render() {
    return(
      <div>
        <input type="text" type="text"
                           ref={this.textInput}/>
        <input type="button"
                value="Focus input"
                onClick={this.focusTextInput}/>
      </div>
    )
  }
}

class Refs extends React.Component{
  constructor(props){
    super(props)
    this.myRef = React.createRef()
    this.refInput = React.createRef()
  }
  render(){
    return (
      <div>
        <p ref={this.myRef}>你好，React</p>
        <CustomTextInput ref={this.refInput}/>
      </div>
    )
  }
  componentDidMount(){
    this.refInput.current.focusTextInput()
    console.log(this.myRef.current)
    console.log(this.refInput.current.focusTextInput())
  }
}
export {Refs}