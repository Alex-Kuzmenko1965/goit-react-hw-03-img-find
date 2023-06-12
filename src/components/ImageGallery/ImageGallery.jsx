import cl from './ImageGallery.module.css';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import ErrorMessage from "../ErrorMessage/ErrorMessage";

export const ImageGallery = ({ currentPage, hits, totalPages, error, status, STATUS, openModal }) => {
  if (status === STATUS.PENDING) {
    return <p>Loading...</p>;
  }

  if (status === STATUS.RESOLVED) {
    return (
    <ul className={cl.imageGallery} onClick={openModal} >
      {hits.map(({ id, webformatURL, type, largeImageURL }) => {
        return (
          <ImageGalleryItem
          id = {id} 
          webformatURL = {webformatURL}
          largeImageURL = {largeImageURL}
          type={type} /> 
        );})
      }
    </ul>
  );
}

  if (status === STATUS.REJECTED) {
    return <ErrorMessage>{error}</ErrorMessage>;
  }
}
