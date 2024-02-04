import React from "react";
import PhotoListItem from './PhotoListItem';
import "../styles/PhotoList.scss";

const PhotoList = ({
    photos,
    toggleFavorite, 
    favoritePhotos,
    openModal,
    closeModal,
    smallThumbnails,
  }) => {
  return (
    <ul className="photo-list">
      {photos.map(photoData => (
        <li key={photoData.id}>
          <PhotoListItem 
            photoData={photoData}
            toggleFavorite={toggleFavorite}
            isFavorite={Array.isArray(favoritePhotos) && favoritePhotos.includes(photoData.id)}
            favoritePhotos={favoritePhotos}
            openModal={openModal}
            closeModal={closeModal}
            smallThumbnails={smallThumbnails}
          />
        </li>
      ))}
    </ul>
  );
};

export default PhotoList;