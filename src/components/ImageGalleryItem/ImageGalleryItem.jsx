import cl from './ImageGalleryItem.module.css';
import React from "react";

export const ImageGalleryItem = ({ id, webformatURL, largeImageURL, tags}) => {
  
  return (
    <li className = {cl.imageGalleryItem} key = {id} >
    <img className = {cl.imageGalleryItem_image} id = {largeImageURL} src = {webformatURL} alt={tags} />
    </li>
  );
}