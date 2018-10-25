import React from 'react'
import TestJsx from './test'
class TestLifereCycle extends React.Component{
  constructor(props) {
    super(props)
    this.name = '戴维'
    this.state = {
      age: 24
    }
  }

  clickHandler = () => {
    this.setState((prevState) => ({
      age: prevState.age - 1
    }))
  }
  // getDerivedStateFromProps (nextProps, prevState) {
  //   console.log('getDerivedStateFromProps: ', `nextProps: ${nextProps}`, `prevState: ${prevState}`)
  // }
  componentDidMount () {
    console.log('componentDidMount: 在该方法里设置状态将会触发重渲。')
  }
  componentWillMount() {
    console.log('componentWillMount')
    console.log(this.props)
  }
  shouldComponentUpdate (nextProps, nextState) {
    console.log('shouldComponentUpdate', `nextProps: ${nextProps}`, `prevState: ${nextState}`)
    return !(nextState === this.state)
  }
  // getSnapshotBeforeUpdate (prevProps, prevState) {
  //   console.log('getSnapshotBeforeUpdate:在最新的渲染输出提交给DOM前将会立即调用', `prevProps: ${prevProps}`, `prevState: ${prevState}`)
  // }
  componentDidUpdate (prevProps, prevState) {
    console.log('componentDidUpdate()会在更新发生后立即被调用。该方法并不会在初始化渲染时调用', `prevProps: ${prevProps}`, `prevState: ${prevState}`)
  }

  componentWillUnmount () {
    console.log('componentWillUnmount: 在组件被卸载和销毁之前立刻调用')
  }

  componentDidCatch(error, info) {
    console.log('componentDidCatch', `error: ${error}`, `info: ${info}`)
  }

  render(){
    let tpl = (
      <React.Fragment>
        <TestJsx/>
      </React.Fragment>
    )
    return (
      <div>
        <p style={{color: this.props.color}}>
          我的名字叫{this.name}
        </p>
        <p>
          我{this.state.age}岁了
        </p>
        {tpl}
        <button onClick={this.clickHandler}>点击我</button>
      </div>
    )
  }
}

TestLifereCycle.defaultProps = {
  color: 'red'
}

export default TestLifereCycle