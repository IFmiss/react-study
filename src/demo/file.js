import React from 'react'
class FileInput extends React.Component {
  constructor (props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit (e) {
    console.log(e.target.files[0])
  }

  render () {
    return (
      <form>
        <input type="file" onChange={this.handleSubmit}/>
      </form>
    )
  }
}

export default FileInput
