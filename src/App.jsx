// import  cl from './App.module.css';
import React, { Component } from 'react';

import { Searchbar } from './components/Searchbar/Searchbar';
import { getImagesGalery } from "./api";
import { ImageGallery } from './components/ImageGallery/ImageGallery';
import { Button } from "./components/Button/Button";
import { Modal } from "./components/Modal/Modal";

const STATUS = {
  IDLE: "idle",
  PENDING: "pending",
  RESOLVED: "resolved",
  REJECTED: "rejected",
};
export default class App extends Component {
  state = {
    hits: [],
    searchQuery: "",
    status: STATUS.IDLE,
    error: null,
    currentPage: 1,
    totalPages: 1,
    limit: 12,
    isModalOpen: false,
    largeImageURL: "",
  };
  
  componentDidUpdate(_, prevState) {
    const { searchQuery, currentPage } = this.state;
    
    if (prevState.searchQuery !== searchQuery || prevState.currentPage !== currentPage) {      
      this.fetchGallery();
    }
  }

  fetchGallery = async () => {
    const {  searchQuery, limit, currentPage } = this.state;
    
    await this.setState({ status: STATUS.PENDING });   

    try {
      const data = await getImagesGalery({ searchQuery, currentPage, limit });
      // console.log(data);

      if (!data.hits.length) {
        throw new Error("No matches found");
      }
      
      this.setState((prevState) => ({
        hits: [...prevState.hits, ...data.hits],
        totalPages: Math.ceil(data.totalHits / limit),
        status: STATUS.RESOLVED,
        error: null,
      }));
      
    } catch (error) {
      this.setState({ error: error.message, status: STATUS.REJECTED });
    }
  };
 
  handleFormSubmit = searchQuery => {
    this.setState({
      searchQuery: searchQuery,
      hits: [],
      currentPage: 1,
    });
  };

  handleLoadMore = () => {
    this.setState((prevState) => ({ currentPage: prevState.currentPage + 1 }));
  };

  openModal = event => {
    this.setState({ largeImageURL: event.target.id });
    this.handleModal();
  }

  handleModal = () => {
    this.setState((prevState) => ({
      isModalOpen: !prevState.isModalOpen,
    }));
  };
  
  render() {
    const { searchQuery, currentPage, totalPages, error, status, hits, isModalOpen } = this.state;
    const showLoadMoreButton =
    hits.length !== 0 && currentPage < totalPages;
    
    return (
      <>   
        <Searchbar
        searchQuery = {searchQuery}
        onChange = {this.handleSearchChange}
        onSubmit = {this.handleFormSubmit} />
        <ImageGallery 
          currentPage = {currentPage}
          totalPages = {totalPages}
          error = {error}
          status = {status}
          STATUS = {STATUS}
          hits = {this.state.hits}
          openModal={this.openModal}  />
        {showLoadMoreButton && (
        <Button
          onClick={this.handleLoadMore}
          disabled={status === STATUS.PENDING ? true : false}
        >
          {status === STATUS.PENDING ? "Loading..." : "Load More"}
        </Button>
        )}
        {isModalOpen && (
          <Modal
          largeImageURL={this.state.largeImageURL}
          openModal={this.openModal}
          handleModal={this.handleModal}
          />
        )}
      </>
    );
  }
}