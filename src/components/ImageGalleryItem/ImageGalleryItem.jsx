import cl from './ImageGalleryItem.module.css';
import React from "react";
// import { nanoid } from "nanoid";

// import Skeleton from "../Skeleton";
export const ImageGalleryItem = ({ id, webformatURL, tags}) => {
  // console.log(largeImageURL);
  return (
    <li className = {cl.imageGalleryItem} key = {id} >
    <img className = {cl.imageGalleryItem_image} id = {id} src = {webformatURL} alt={tags} />
    </li>
  );
}