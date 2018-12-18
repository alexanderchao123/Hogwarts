import React, { Component } from 'react'
import CharacterImage from './CharacterImage'

class House extends Component {

  render() {
    let images = this.props.houseCharacters.map((character) => {
      return <CharacterImage character={character}/>
    })

    return(
      <div>
        <h2>House of {this.props.house}</h2>
        {images}
      </div>
    )
  }
}

export default House
