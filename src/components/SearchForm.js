import React, { Component } from 'react'

class SearchForm extends Component {
  constructor() {
    super()
    this.state = {
      searchTerm: ""
    }
  }

  changeHandler = (event) => {
    this.setState({
      searchTerm: event.target.value
    })
  }

  submitHandler = (event) => {
    event.preventDefault()
    this.props.searchHandler(this.state.searchTerm)
  }

  render() {
    return(
      <div>
        <h1>Search For Characters</h1>
        <form onSubmit={this.submitHandler}>
          <input name="searchTerm" value={this.state.searchTerm} placeholder="Enter character name" onChange={this.changeHandler} />
          <button type="submit">Search</button>
        </form>
      </div>
    )
  }
}

export default SearchForm
