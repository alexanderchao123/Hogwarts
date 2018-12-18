import React, { Component } from 'react'
import EditForm from './EditForm'

class Character extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isEdit: false
    }
  }

  toggleEditButton = (event) => {
    this.setState({isEdit: !this.state.isEdit})
  }

  updateHouse = (house) => {
    this.setState({
      isEdit: false
    })
    this.props.updateHouse({...this.props.character, house: house})
  }

  render() {
    return(
      <div>
        <img src={this.props.character.image1} alt="" width="50%" height="50%" />
        <h3>Name: {this.props.character.name}</h3>
        <h3>House: {this.props.character.house}</h3>
        {this.state.isEdit ? (
          <div>
            <EditForm house={this.props.character.house} updateHouse={this.updateHouse} />
            <button onClick={this.toggleEditButton}>Cancel</button>
          </div>
        ) : (
          <button onClick={this.toggleEditButton}>Edit House</button>
        )}
      </div>
    )
  }
}

export default Character
