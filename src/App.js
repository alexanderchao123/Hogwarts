import React, { Component } from 'react';
import CharacterContainer from './containers/CharacterContainer'
import HouseContainer from './containers/HouseContainer'
import CharacterForm from './components/CharacterForm'
import SearchForm from './components/SearchForm'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      url: "http://localhost:3001/potter_stuff",
      characters: [],
      filtered: []
    }
  }

  componentDidMount() {
    fetch(this.state.url)
    .then(resp => resp.json())
      .then(json => this.setState({characters: json, filtered: json}))
    }

  createCharacter = (character) => {
    fetch(this.state.url, {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(character)
    })
    .then(resp => resp.json())
    .then(character => {
      this.setState({
        characters: [...this.state.characters, character],
        filtered: [...this.state.characters, character]
      })
    })
  }

  updateHouse = (updatedCharacter) => {
    let id = updatedCharacter.id
    fetch(`http://localhost:3001/potter_stuff/${id}`, {
      method: "PUT",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(updatedCharacter)
    })
    .then(resp => resp.json())
    .then(json => {
      let newArr = [...this.state.characters]
      let char = newArr.find(char => char.id === updatedCharacter.id)
      char.house = updatedCharacter.house
      this.setState({characters: newArr, filtered: newArr})
    })
  }

  searchCharacter = (searchTerm) => {
    let filteredCharacters = this.state.characters.filter((character) => {
      return character.name.includes(searchTerm) || character.house.includes(searchTerm)
    })
    this.setState({filtered: filteredCharacters})
  }

  render() {
    return (
      <div>
        <h1>Hogwarts Encyclopedia</h1>
        <SearchForm searchCharacter={this.searchCharacter} />
        <CharacterForm createCharacter={this.createCharacter} />
        <CharacterContainer characters={this.state.filtered} updateHouse={this.updateHouse} />
        <HouseContainer updateHouse={this.updateHouse} characters={this.state.filtered} />
      </div>
    );
  }
}

export default App;
