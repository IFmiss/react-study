import React from 'react'
import CSSTransition from 'react-addons-css-transition-group'
class TestCss extends React.Component{
  render () {
    return (
      <div>
        <CSSTransition
        transitionName="carousel"
        transitionEnterTimeout={300}
        transitionLeaveTimeout={300}>
        <img src={this.props.imageSrc} key={this.props.imageSrc} />
        </CSSTransition>
      </div>
    )
  }
}
export default TestCss