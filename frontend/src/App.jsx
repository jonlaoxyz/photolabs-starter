// App.jsx
import React from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';

const App = () => {
  const {
    currentTopicPhotos,
    fetchPhotosByTopic,
    setFavoritePhotos,
    toggleFavorite,
    handleFavToggle,
    favoritePhotos,
    isFavorite,
    isModalOpen,
    openModal,
    closeModal,
    selectedPhoto,
    photoData,
    topicData,
  } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute
        handleFavToggle={handleFavToggle}
        toggleFavorite={toggleFavorite}
        setFavoritePhotos={setFavoritePhotos}
        favoritePhotos={favoritePhotos}
        isFavorite={isFavorite}
        currentTopicPhotos={currentTopicPhotos}
        fetchPhotosByTopic={fetchPhotosByTopic}
        photos={photoData}
        topics={topicData}
        openModal={openModal}
        closeModal={closeModal}
      />
      {isModalOpen && (
        <PhotoDetailsModal
          handleFavToggle={handleFavToggle}
          toggleFavorite={toggleFavorite}
          setFavoritePhotos={setFavoritePhotos}
          favoritePhotos={favoritePhotos}
          isFavorite={isFavorite}
          closeModal={closeModal}
          photoData={selectedPhoto}
          photos={photoData}
        />
      )}
    </div>
  );
};

export default App;