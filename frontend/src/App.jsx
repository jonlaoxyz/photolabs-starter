// App.jsx
import React from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';
import photos from 'mocks/photos';
import topics from 'mocks/topics';

const photosArray = Object.values(photos);
const topicsArray = Object.values(topics);

const App = () => {
  const {
    isModalOpen,
    openModal,
    closeModal,
    selectedPhoto,
    favoritePhotos,
    toggleFavorite,
    setFavoritePhotos,
  } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute
        photos={photosArray}
        topics={topicsArray}
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
          photos={photosArray}
          toggleFavorite={toggleFavorite}
          favoritePhotos={favoritePhotos}
          setFavoritePhotos={setFavoritePhotos}
        />
      )}
    </div>
  );
};

export default App;