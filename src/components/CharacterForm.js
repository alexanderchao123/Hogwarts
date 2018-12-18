import React, { Component } from 'react'

class CharacterForm extends Component {
  constructor() {
    super()
    this.state = {
      name: "",
      age: "",
      house: "",
      role: "",
      image1: "",
      image2: ""
    }
  }

  changeHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  submitHandler = (event) => {
    event.preventDefault()
    this.props.createCharacter(this.state)
    this.setState({
      name: "",
      age: "",
      house: "",
      role: "",
      image1: "",
      image2: ""
    })
  }

  render() {
    return(
      <form onSubmit={this.submitHandler}>
        <input type="text" name="name" placeholder="name" value={this.state.name} onChange={this.changeHandler} />
        <input type="text" name="age" placeholder="age" value={this.state.age} onChange={this.changeHandler} />
        <input type="text" name="role" placeholder="role" value={this.state.role} onChange={this.changeHandler} />
        <input type="text" name="house" placeholder="house" value={this.state.house} onChange={this.changeHandler} />
        <input type="text" name="image1" placeholder="image1" value={this.state.image1} onChange={this.changeHandler} />
        <input type="text" name="image2" placeholder="image2" value={this.state.image2} onChange={this.changeHandler} />
        <button type="submit">Create Character</button>
      </form>
    )
  }
}

export default CharacterForm
