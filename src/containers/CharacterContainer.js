import React, { Component } from 'react'
import Character from '../components/Character'

class CharacterContainer extends Component {
  render() {
    let characters = this.props.characters.map((character) => {
      return <Character key={character.name} character={character} updateHouse={this.props.updateHouse} />
    })

    return (
      <div>{characters}</div>
    )
  }
}

export default CharacterContainer
