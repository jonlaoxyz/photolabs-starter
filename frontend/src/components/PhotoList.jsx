import React from "react";
import PhotoListItem from './PhotoListItem';
import "../styles/PhotoList.scss";
import photos from '../mocks/photos';

const PhotoList = () => {
  return (
    <ul className="photo-list">
      {photos.map(photoData => (
        <li key={photoData.id}>
          <PhotoListItem photoData={photoData} />
        </li>
      ))}
    </ul>
  );
};

export default PhotoList;
