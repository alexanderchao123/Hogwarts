import React, { Component } from 'react'
import Character from './Character'

class CharacterImage extends Component {
  constructor() {
    super()
    this.state = {
      isClicked: false
    }
  }

  clickHandler = (event) => {
    this.setState({
      isClicked: !this.state.isClicked
    })
  }

  render() {
    return(
      <div>
        {this.state.isClicked ? (
          <Character updateHouse={this.props.updateHouse} character={this.props.character} />
        ) : (
          <img src={this.props.character.image2} alt="" onClick={this.clickHandler} width="50%" height="50%" />
        ) }
      </div>
    )
  }
}

export default CharacterImage
