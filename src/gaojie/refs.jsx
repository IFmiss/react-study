import React from 'react'
export default (WrappedComp) => class RefsHOC extends React.Component{
  proc = (wrappedCompInstance) => {
    // wrappedCompInstance.method()
    console.log(wrappedCompInstance)
  }
  render() {
    const props = Object.assign({}, this.props, {
      getRef: (ref) => this.headerDemo = ref,
      name: '戴伟'
    })
    return <WrappedComp {...props}/>
  }
}