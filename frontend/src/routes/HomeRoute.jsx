import React, { useState, useCallback } from 'react';

import PhotoList from 'components/PhotoList';
import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';


const HomeRoute = ({ photos, topics, openModal, closeModal, favoritePhotos, setFavoritePhotos }) => {

  //const [favoritePhotos, setFavoritePhotos] = useState([]);
  const toggleFavorite = useCallback((photoId) => {
    setFavoritePhotos((prevFavorites) => {
      if (prevFavorites.includes(photoId)) {
        return prevFavorites.filter((id) => id !== photoId);
      } else {
        return [...prevFavorites, photoId];
      }
    });
  }, [setFavoritePhotos]);

  const isFavPhotoExist = favoritePhotos.length > 0;

  return (
    <div className="home-route">
      <TopNavigation
        topics={topics}
        isFavPhotoExist={isFavPhotoExist}
      />
      <PhotoList
        photos={photos}
        toggleFavorite={toggleFavorite}
        favoritePhotos={favoritePhotos}
        openModal={openModal}
        closeModal={closeModal}
      />
    </div>
  );
};

export default HomeRoute;


