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
      characters: [],
      filtered: []
    }
  }

  componentDidMount() {
    fetch("http://localhost:3001/potter_stuff")
    .then(resp => resp.json())
    .then(json => {
      this.setState({
        characters: json,
        filtered: json
      })
    })
  }

  createCharacter = (character) => {
    fetch("http://localhost:3001/potter_stuff", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(character)
    })
    .then(resp => resp.json())
    .then(character => {
      this.setState({
        characters: [...this.state.characters, character]
      })
    })
  }

  searchHandler = (searchTerm) => {
    if (searchTerm === "") {
      this.setState({filtered: this.state.characters})
    } else {
      let characters = this.state.characters.filter((character) => {
        return character.name.includes(searchTerm) || character.house.includes(searchTerm)
      })
      this.setState({filtered: characters})
    }
  }

  render() {
    return (
      <div>
        <h1>Hogwarts</h1>
        <SearchForm searchHandler={this.searchHandler} />
        <CharacterForm createCharacter={this.createCharacter}/>
        <CharacterContainer characters={this.state.filtered}/>
        <HouseContainer characters={this.state.characters} />
      </div>
    );
  }
}

export default App;
