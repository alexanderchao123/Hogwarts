import React, { Component } from 'react'
import EditForm from './EditForm'

class Character extends Component {
  constructor(props) {
    super(props)
    this.state = {
      character: this.props.character,
      isEdit: false
    }
  }

  clickHandler = (event) => {
    this.setState({
      isEdit: !this.state.isEdit
    })
  }

  changeHouse = (house) => {
    this.setState({
      character: {
        ...this.state.character,
        house: house
      },
      isEdit: false
    })
  }

  updateCharacter = () => {
    let id = this.state.character.id
    fetch(`http://localhost:3001/potter_stuff/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state.character)
    })
    .then(resp => resp.json())
    .then(json => console.log(json))
  }

  componentDidUpdate() {
    this.updateCharacter()
  }

  render() {
    return(
      <div>
        <img src={this.state.character.image1} alt="" width="50%" height="50%" />
        <h3>Name: {this.state.character.name}</h3>
        <h3>House: {this.state.character.house}</h3>
        {this.state.isEdit ? (
          <div>
            <EditForm house={this.state.character.house} changeHouse={this.changeHouse} />
            <button onClick={this.clickHandler}>Cancel</button>
          </div>
        ) : (
          <button onClick={this.clickHandler}>Edit House</button>
        )}
      </div>
    )
  }
}

export default Character
