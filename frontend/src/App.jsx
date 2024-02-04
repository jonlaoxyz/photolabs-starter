// App.jsx
import React from 'react';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';
import './App.scss';

const App = () => {
  const {
    currentTopicPhotos,
    fetchPhotosByTopic,
    toggleFavorite,
    favoritePhotos,
    isFavorite,
    isModalOpen,
    openModal,
    closeModal,
    selectedPhoto,
    photoData,
    topicData,
    dispatch,
  } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute
        toggleFavorite={toggleFavorite}
        favoritePhotos={favoritePhotos}
        isFavorite={isFavorite}
        currentTopicPhotos={currentTopicPhotos}
        fetchPhotosByTopic={fetchPhotosByTopic}
        photos={photoData}
        topics={topicData}
        openModal={openModal}
        closeModal={closeModal}
        dispatch={dispatch}
      />
      {isModalOpen && (
        <PhotoDetailsModal
          toggleFavorite={toggleFavorite}
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