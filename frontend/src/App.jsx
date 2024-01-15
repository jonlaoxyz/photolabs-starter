// App.jsx
import React from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import photos from 'mocks/photos';
import topics from 'mocks/topics';
import useApplicationData from 'hooks/useApplicationData';

const photosArray = Object.values(photos);
const topicsArray = Object.values(topics);

const App = () => {
  const {
    isModalOpen,
    openModal,
    closeModal,
    selectedPhoto,
    favoritePhotos,
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
        setFavoritePhotos={setFavoritePhotos}
      />
      {isModalOpen && <PhotoDetailsModal
        closeModal={closeModal}
        photoData={selectedPhoto}
        photos={photosArray}
        toggleFavorite={setFavoritePhotos}
        favoritePhotos={favoritePhotos}
      />}
    </div>
  );
};

export default App;