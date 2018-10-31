import React from 'react'
const themes = {
  dark: {
    background: '#333',
    color: '#fff'
  },
  light: {
    background: '#fff',
    color: '#333'
  }
}
const ContextInfo = React.createContext({
  theme: themes.dark,
  toggoleTheme: () => {}
})

class ThemeToggleButton extends React.Component{
  render() {
    return(
      <ContextInfo.Consumer>
        {
          ({theme, toggoleTheme}) => (
            <div>
              <div style={{
                width: '200px',
                height: '100px',
                border: '1px solid red',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: theme.background
              }}>
                <p style={{color: theme.color}}>这是我显示内容得颜色呀呀呀呀呀</p>
              </div>
              <button onClick={toggoleTheme}>点击切换主题</button>
            </div>
          )
        }
      </ContextInfo.Consumer>
    )
  }
}

class ContextComp extends React.Component{
  constructor(props) {
    super(props)
    this.toggoleTheme = () => {
      this.setState(prevState => ({
        theme: prevState.theme === themes.dark ? themes.light : themes.dark
      }))
    }
    this.state = {
      theme: themes.light,
      toggoleTheme: this.toggoleTheme
    }
  }
  render() {
    return(
      <ContextInfo.Provider value={this.state}>
        <div>
          <ThemeToggleButton/>
        </div>
      </ContextInfo.Provider>
    )
  }
}


export default ContextComp