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
    favoritePhotos,
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
        currentTopicPhotos={currentTopicPhotos}
        fetchPhotosByTopic={fetchPhotosByTopic}
        setFavoritePhotos={setFavoritePhotos}
        favoritePhotos={favoritePhotos}
        toggleFavorite={toggleFavorite}
        photos={photoData}
        topics={topicData}
        openModal={openModal}
        closeModal={closeModal}
      />
      {isModalOpen && (
        <PhotoDetailsModal
          setFavoritePhotos={setFavoritePhotos}
          favoritePhotos={favoritePhotos}
          toggleFavorite={toggleFavorite}
          closeModal={closeModal}
          photoData={selectedPhoto}
          photos={photoData}
        />
      )}
    </div>
  );
};

export default App;