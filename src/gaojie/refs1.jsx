import React from 'react'
export default (WrappedComp) => class LogProps extends React.Component{
  componentDidUpdate(prevProps) {
    console.log('old props: ', prevProps)
    console.log('new propsL: ', this.props)
  }

  render() {
    return (
      <div>
        <WrappedComp {...this.props}/>
      </div>
    )
  }
}