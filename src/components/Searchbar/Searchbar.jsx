import cl from './Searchbar.module.css';
import React, { Component } from 'react';

export class Searchbar extends Component {
  state = {    
    searchQuery: "",
  }

  handleSearchChange = event => {    
    this.setState({ searchQuery: event.currentTarget.value });
    console.log(this.state.searchQuery);
  };

  handleSubmit = event => {
    event.preventDefault();    
    this.props.onSubmit(this.state.searchQuery);
    this.setState({ searchQuery: event.currentTarget.value });
  };

  render () {       
    
    return (
      <header className={cl.searchbar}>
        <form className={cl.form} onSubmit={this.handleSubmit}>
          <button type="submit" className={cl.searchForm_button} >
            Search
          </button>

          <input
            className={cl.searchForm_input}
            type="text"
            name="search"            
            placeholder="Search images and photos"
            value={this.state.searchQuery}
            onChange={this.handleSearchChange}
          />
        </form>
      </header>
    );
  };
}