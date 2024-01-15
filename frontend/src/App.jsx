// App.jsx
import React from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';

const App = () => {
  const {
    isModalOpen,
    openModal,
    closeModal,
    selectedPhoto,
    favoritePhotos,
    toggleFavorite,
    setFavoritePhotos,
    photoData,
    topicData,
  } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute
        photos={photoData}
        topics={topicData}
        openModal={openModal}
        closeModal={closeModal}
        favoritePhotos={favoritePhotos}
        toggleFavorite={toggleFavorite}
        setFavoritePhotos={setFavoritePhotos}
      />
      {isModalOpen && (
        <PhotoDetailsModal
          closeModal={closeModal}
          photoData={selectedPhoto}
          photos={photoData}
          toggleFavorite={toggleFavorite}
          favoritePhotos={favoritePhotos}
          setFavoritePhotos={setFavoritePhotos}
        />
      )}
    </div>
  );
};

export default App;