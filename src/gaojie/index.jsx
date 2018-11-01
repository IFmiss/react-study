import React from 'react'
import WithHeader from './test'
import setHeader from './ele'
import ExtendsCom from './extends'
// @withHeader
class TG extends React.Component{
  render() {
    return (
      <div>
        我是一个普通的组件
      </div>
    )
  }
}

class MTG extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      name: '戴维'
    }
  }
  render() {
    return(
      <div>
        这是组件的内容信息{this.props.test}
      </div>
    )
  }
}

class ETG extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      count: 1
    }
  }
  render() {
    return (
      <div>
        hello ETG
      </div>
    )
  }
}

// export default TestGaoJie
const TestGaoJie = WithHeader (TG)
const TestMineGaoJie = setHeader ('hello world')(MTG)
const ExtendsComGaoJie = ExtendsCom ('daiwei')(ETG)
export {
  TestGaoJie,
  TestMineGaoJie,
  ExtendsComGaoJie
}