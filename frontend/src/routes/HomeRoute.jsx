// HomeRoute.jsx
import React, { useCallback, useEffect } from 'react';
import PhotoList from 'components/PhotoList';
import TopNavigation from 'components/TopNavigationBar';
import useApplicationData from 'hooks/useApplicationData';
import '../styles/HomeRoute.scss';


const HomeRoute = ({
  currentTopicPhotos,
  fetchPhotosByTopic,
  isFavorite,
  handleFavToggle,
  photos,
  topics,
  openModal,
  closeModal,
  favoritePhotos,
  toggleFavorite,
 }) => {

  const isFavPhotoExist = favoritePhotos.length > 0;

  const handleTopicClick = useCallback((topicId) => {
    fetchPhotosByTopic(topicId);
  }, [fetchPhotosByTopic]);

  return (
    <div className="home-route">
      <TopNavigation
        topics={topics}
        isFavPhotoExist={isFavPhotoExist}
        onTopicClick={handleTopicClick}
      />
      <PhotoList
        photos={currentTopicPhotos.length > 0 ? currentTopicPhotos : photos}
        toggleFavorite={toggleFavorite}
        favoritePhotos={favoritePhotos}
        isFavorite={isFavorite}
        handleFavToggle={handleFavToggle}
        openModal={openModal}
        closeModal={closeModal}
      />
    </div>
  );
};

export default HomeRoute;