import React from 'react'
const theme = {
  dark: {
    background: '#000',
    color: '#fff'
  },
  light: {
    background: '#fff',
    color: '#000'
  }
}
const ThemeContext = React.createContext(theme.dark)

class Tips extends React.Component{
  constructor (props) {
    super(props)
    this.state = {
      style: {
        width: '300px',
        height: '150px',
        display: 'flex',
        alignItems: 'center',
        border: '1px solid red'
      }
    }
  }
  render() {
    return(
      <ThemeContext.Consumer>
        {
          theme => (
            <div style={{
              ...this.state.style,
              background: theme.background
            }}>
              <p style={{
                color: theme.color
              }}>这是用于测试context自上到下切换样式的Demo</p>
            </div>
          )
        }
      </ThemeContext.Consumer>
    )
  }
}

// 切换主题的设置
class ConfigBtn extends React.Component{
  constructor(props){
    super(props)
  }

  handleChange = () => {
    this.props.changeTheme()
  }

  render() {
    return <button onClick={this.handleChange}>点击切换主题</button>
  }
}

class ContextTheme extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      theme: theme.light
    }
  }

  ToggleTheme = () => {
    this.setState(pervState => ({
      theme: pervState.theme === theme.dark ? theme.light : theme.dark
    }))
  }

  render() {
    return (
      <ThemeContext.Provider value={this.state.theme}>
        <Tips/>
        <ConfigBtn changeTheme={this.ToggleTheme}/>
      </ThemeContext.Provider>
    )
  }
}

export default ContextTheme