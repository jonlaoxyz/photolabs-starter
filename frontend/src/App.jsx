import React, { useState } from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import photos from 'mocks/photos';
import topics from 'mocks/topics';

const photosArray = Object.values(photos);
const topicsArray = Object.values(topics);

const App = () => {

  // Used to handle Modal state/logic
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [favoritePhotos, setFavoritePhotos] = useState([]);

  const openModal = (photoData) => {
    setIsModalOpen(true);
    setSelectedPhoto(photoData);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPhoto(null);
  };

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
        toggleFavorite={favoritePhotos}
        favoritePhotos={favoritePhotos}
      />}
    </div>
  );
};

export default App;