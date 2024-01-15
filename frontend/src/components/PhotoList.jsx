import React from "react";
import PhotoListItem from './PhotoListItem';
import "../styles/PhotoList.scss";



const PhotoList = ({ photos, toggleFavorite, favoritePhotos, openModal }) => {
  return (
    <ul className="photo-list">
      {photos.map(photoData => (
        <li key={photoData.id}>
          <PhotoListItem 
            photoData={photoData}
            toggleFavorite={toggleFavorite}
            isFavorite={favoritePhotos.includes(photoData.id)}
            openModal={openModal}
          />
        </li>
      ))}
    </ul>
  );
};

export default PhotoList;
