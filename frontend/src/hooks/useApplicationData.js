// hooks/useApplicationData.js
import { useState } from 'react';

const useApplicationData = () => {
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

  return {
    isModalOpen,
    openModal,
    closeModal,
    selectedPhoto,
    favoritePhotos,
    setFavoritePhotos,
  };
};

export default useApplicationData;