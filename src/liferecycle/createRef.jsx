import React from 'react'
class MyCreateRef extends React.Component{
  constructor(props) {
    super(props)
    this.inputRef = React.createRef()
  }

  render() {
    return <input type="text" ref={this.inputRef}/>
  }

  componentDidMount () {
    this.inputRef.current.focus()
    this.inputRef.current.value = 'daiwei'
  }
}

let RefChild = React.forwardRef ((props, ref) => (
  <button ref={ref} className="FancyButton">
    {props.children}
   </button>
))

export  {
  MyCreateRef,
  RefChild
}