import React, { Component } from 'react'
import Character from '../components/Character'

class CharacterContainer extends Component {
  render() {
    let characters = this.props.characters.map((character) => {
      return <Character key={character.name} character={character} />
    })

    return (
      <div>{characters}</div>
    )
  }
}

export default CharacterContainer
