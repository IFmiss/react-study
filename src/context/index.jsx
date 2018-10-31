import React from 'react'
const ThemeContext = React.createContext('ligth')

class Button extends React.Component{
  render() {
    return(
      <button style={{background: this.props.theme}}>哈哈哈此时设置的theme为{this.props.theme}</button>
    )
  }
}

class ThemeButton extends React.Component{
  render() {
    return(
      <ThemeContext.Consumer>
        {theme => <Button {...this.props} theme={theme} />}
      </ThemeContext.Consumer>
    )
  }
}

class Toobar extends React.Component{
  render() {
    return(
      <div>
        <ThemeButton/>
      </div>
    )
  }
}

class TestContext extends React.Component{
  render() {
    return (
      <ThemeContext.Provider value="red">
        <Toobar/>
      </ThemeContext.Provider>
    )
  }
}

export {
  TestContext
}