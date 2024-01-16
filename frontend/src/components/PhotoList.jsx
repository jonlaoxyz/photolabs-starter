// PhotoList.jsx
import React from "react";
import PhotoListItem from './PhotoListItem';
import "../styles/PhotoList.scss";

const PhotoList = ({
    photos,
    toggleFavorite,
    favoritePhotos,
    setFavoritePhotos,
    handleFavToggle,
    openModal,
    closeModal,
  }) => {
  return (
    <ul className="photo-list">
      {photos.map(photoData => (
        <li key={photoData.id}>
          <PhotoListItem 
            photoData={photoData}
            handleFavToggle={handleFavToggle}
            isFavorite={favoritePhotos.includes(photoData.id)}
            toggleFavorite={toggleFavorite}
            setFavoritePhotos={setFavoritePhotos}
            favoritePhotos={favoritePhotos}
            openModal={openModal}
            closeModal={closeModal}
          />
        </li>
      ))}
    </ul>
  );
};

export default PhotoList;