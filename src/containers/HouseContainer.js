import React, { Component } from 'react'
import House from '../components/House'

class HouseContainer extends Component {
  constructor() {
    super()
    this.state = {
      houses: ["Gryffindor", "Slytherin", "HufflePuff", "Ravenclaw"]
    }
  }

  render() {
    let houses = this.state.houses.map((house) => {
      let houseCharacters = []
      this.props.characters.forEach((character) => {
        if (character.house == house) houseCharacters.push(character)
      })
      return <House updateHouse={this.props.updateHouse} house={house} houseCharacters={houseCharacters} />
    })

    return(
      <div>
        {houses}
      </div>
    )
  }
}

export default HouseContainer
