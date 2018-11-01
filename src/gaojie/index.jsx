import React from 'react'
import WithHeader from './test'
import setHeader from './ele'
import ExtendsCom from './extends'
import RefsComp from './refs'
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
  componentDidMount() {
    console.log('this.props.refs', this.props)
  }
  render() {
    const { getRef, ...props} = this.props
    console.log('props', ...props)
    console.log('this.props', this.props)
    return (
      <div ref={getRef}>
        hello ETG
      </div>
    )
  }
}

// export default TestGaoJie
const TestGaoJie = WithHeader (TG)
const TestMineGaoJie = setHeader ('hello world')(MTG)
// const ExtendsComGaoJie = ExtendsCom ('daiwei')(ETG)
const TestRefsCompGaoJie = RefsComp (ETG)
export {
  TestGaoJie,
  TestMineGaoJie,
  // ExtendsComGaoJie,
  TestRefsCompGaoJie
}