// HomeRoute.jsx
import React, { useCallback, useEffect } from 'react';
import PhotoList from 'components/PhotoList';
import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';

const HomeRoute = ({ photos, topics, openModal, closeModal, favoritePhotos, setFavoritePhotos, fetchPhotosByTopic, }) => {

  const toggleFavorite = (photoId) => {
    setFavoritePhotos((prevFavorites) => {
      if (prevFavorites.includes(photoId)) {
        return prevFavorites.filter((id) => id !== photoId);
      } else {
        return [...prevFavorites, photoId];
      }
    });
  };

  const isFavPhotoExist = favoritePhotos.length > 0;

  useEffect(() => {
    // This effect runs only when 'topics' changes
    console.log('Topics have changed');
  }, [topics]);

  const handleTopicClick = useCallback((topicId) => {
    fetchPhotosByTopic(topicId);
  }, [fetchPhotosByTopic]);

  return (
    <div className="home-route">
      <TopNavigation topics={topics} isFavPhotoExist={isFavPhotoExist} onTopicClick={handleTopicClick} />
      <PhotoList
        photos={photos}
        toggleFavorite={toggleFavorite}
        favoritePhotos={favoritePhotos}
        openModal={openModal}
        closeModal={closeModal}
        setFavoritePhotos={setFavoritePhotos}
      />
    </div>
  );
};

export default HomeRoute;