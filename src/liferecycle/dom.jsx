import React from 'react'
const divStyle = {
  color: 'red'
}

class TestDom extends React.Component {
  constructor(props) {
    super(props)
  }

  fromChange = (e) => {
    console.log(e.target.value)
  }

  clickButton = (e) => {
    console.log(e)
  }

  render(){
    return (
      <div style={divStyle}>
        <p dangerouslySetInnerHTML = {{
          __html: 'hello react'
        }}></p>
        <span htmlFor="daiwei"></span>
        <form onChange={this.fromChange}>
          <input type="text" placeholder="text1"/>
          <input type="text" placeholder="text2"/>
        </form>
        <button onClick={this.clickButton}>点击</button>
      </div>
    )
  }
}

export default TestDom