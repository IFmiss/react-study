import React from 'react'
class BoilingVerdict extends React.Component{
  render () {
    const { cel } = this.props
    if (cel >= 100) return <p>水开了</p>
    return <p>水并没有开</p>
  }
}

const toCel = (fah) => {
  return (fah - 32) * 5 / 9
}

const toFah = (cel) => {
  return (cel * 9 / 5) + 32
}

const tryConvert = (temperature, convert) => {
  const input = parseFloat(temperature)
  if (Number.isNaN(input)) {
    return ''
  }
  const output = convert(input)
  const rounded = Math.round(output * 1000) / 1000
  return rounded.toString()
}

const scaleNames = {
  c: '摄氏度',
  f: '华氏度'
}

class TemperatureInput extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      temperature: ''
    }
  }
  handleChange = (e) => {
    this.props.onTemperatureChange(e.target.value)
  }
  render(){
    const temperature = this.props.temperature
    const scale = this.props.scale
    return (
      <div>
        <legend>选择输入 {scaleNames[scale]}</legend>
        <input type="text" value={temperature} onChange={this.handleChange}/>
      </div>
    )
  }
}

class CalcBoiling extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      temperature: '',
      scale: 'c'
    }
  }
  handleCelChange = (temperature) => {
    this.setState({
      scale: 'c',
      temperature
    })
  }
  handleFahChange = (temperature) => {
    this.setState({
      scale: 'f',
      temperature
    })
  }
  render() {
    const {scale, temperature} = this.state
    const cel = scale === 'f' ? tryConvert(temperature, toCel) : temperature
    const fah = scale === 'c' ? tryConvert(temperature, toFah) : temperature
    return(
      <div>
        <TemperatureInput scale="c" onTemperatureChange={this.handleCelChange} temperature={cel}/>
        <TemperatureInput scale="f" onTemperatureChange={this.handleFahChange} temperature={fah}/>
      </div>
    )
  }
}
export default CalcBoiling