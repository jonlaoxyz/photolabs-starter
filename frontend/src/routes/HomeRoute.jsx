import React, { useState, useCallback } from 'react';

import PhotoList from 'components/PhotoList';
import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';


const HomeRoute = ({ photos, topics }) => {

  const [favoritePhotos, setFavoritePhotos] = useState([]);
  const toggleFavorite = useCallback((photoId) => {
    setFavoritePhotos((prevFavorites) => {
      if (prevFavorites.includes(photoId)) {
        return prevFavorites.filter((id) => id !== photoId);
      } else {
        return [...prevFavorites, photoId];
      }
    });
  }, []);

  return (
    <div className="home-route">
      <TopNavigation topics={topics} />
      <PhotoList photos={photos} toggleFavorite={toggleFavorite} favoritePhotos={favoritePhotos} />
    </div>
  );
};

export default HomeRoute;


