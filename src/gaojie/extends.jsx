import React from 'react'
export default (data) => (Comp) => class ExtendsComp extends Comp{
  componentDidMount () {
    console.log('extendsComp',this.state)
  }
  render() {
    return (
      <div>
        {data}
      </div>
    )
  }
}