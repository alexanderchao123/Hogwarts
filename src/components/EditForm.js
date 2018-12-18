import React, { Component } from 'react'

class EditForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      house: this.props.house
    }
  }

  changeHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  submitHandler = (event) => {
    event.preventDefault()
    this.props.changeHouse(this.state.house)
  }

  render() {
    return(
      <form onSubmit={this.submitHandler}>
        <input type="text" name="house" value={this.state.house} onChange={this.changeHandler}/>
        <button type="submit">Update House</button>
      </form>
    )
  }
}

export default EditForm
