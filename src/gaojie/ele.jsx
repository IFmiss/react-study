import React from 'react'
// function setHeader (title) {
//   return function (HeaderComponents) {
//     return class HOC extends React.Component{
//       componentWillMount () {
//         // alert(1)
//       }
//       render() {
//         return (
//           <div>
//             <div className='demo-header'>
//               {
//                 title ? title : '这是默认的头部文字'
//               }
//             </div>
//             <HeaderComponents {...this.props}/>
//           </div>
//         )
//       }
//     }
//   }
// }
// export default setHeader
export default (title) => (HeaderComponents) => class HOC extends React.Component{
  componentDidMount() {
    // 可以方便地得到state，做一些更深入的修改。
    console.log('setHeaderInfo', this.state);
  }
  render() {
    const newProps = {
      test:' --> | 这是高阶组件 --> 属性代理'
    }
    return (
      <div>
        <div className="demo-header">
        {
          title ? title : '这是默认的名字'
        }
        <HeaderComponents {...this.props} {...newProps}/>
        </div>
      </div>
    )
  }
}