import React, { Component } from 'react';

import cl from './Modal.module.css';

export class Modal extends Component {
  
  componentDidMount() {
    window.addEventListener("keydown", this.closeOnEsc);
    document.body.style.overflow = "hidden";
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.closeOnEsc);
    document.body.style.overflow = "visible";
  }

  closeOnEsc = (e) => {
    if (e.code === "Escape") {
      this.props.handleModal();
      console.log("ESC");
    }
  };
  
  handleBackdropClick = (e) => {
    if (e.currentTarget === e.target) {
      this.props.handleModal();
      console.log("Backdrop");
    }
  };

  render() {

  return (    
    <div className={cl.Overlay} onClick={this.handleBackdropClick}>
      <div className={cl.Modal}>
        <img src={this.props.largeImageURL} alt="" />
      </div>
    </div>
  );
  }
}