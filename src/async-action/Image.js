import React from 'react'
import PropTypes from 'prop-types'
class Image extends React.Component{
  render () {
    const {getImageData, value} = this.props
    const {isFetch, error, data} = value.fetchData
    let img

    if (data && data.url) {
      img = <img style={{width: '400px'}} src={'http://www.bing.com' + data.url}/>
    } else {
      img = <h4>11111</h4>
    }
    return (
      <div>
        <p>{isFetch ? '数据加载中...' : '数据加载完成!'}</p>
        <button onClick={getImageData}>获取数据信息</button>
        {
          img
        }
        <p>所有数据: {JSON.stringify(value)}</p>
      </div>
    )
  }
}
Image.propTypes = {
  value: PropTypes.object,
  getImageData: PropTypes.func.isRequired
}
export default Image
