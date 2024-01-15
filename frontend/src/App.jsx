import React, { useState } from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import photos from 'mocks/photos';
import topics from 'mocks/topics';

const photosArray = Object.values(photos);
const topicsArray = Object.values(topics);

const App = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="App">
      <HomeRoute
        photos={photosArray}
        topics={topicsArray}
        openModal={openModal}
      />
      {isModalOpen && <PhotoDetailsModal closeModal={closeModal} />}
    </div>
  );
};

export default App;