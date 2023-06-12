import React, { Component } from 'react';
import cl from './Button.module.css';
export class Button extends Component {
  state = {
    isHidden: true,
  }

  omClick = event => {
    event.preventDefault();
    this.props.onClick();
    this.reset();
  };

  render () {
    
    return (
      <button className={cl.Button} onClick={this.omClick}>
        Load More
      </button>
    );
  };
}