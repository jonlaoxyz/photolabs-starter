import React from 'react';
import '../styles/PhotoDetailsModal.scss';
import '../styles/PhotoFavButton.scss';
import PhotoFavButton from 'components/PhotoFavButton';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';

const PhotoDetailsModal = ({
  setFavoritePhotos,
  closeModal,
  photoData,
  toggleFavorite,
  favoritePhotos,
  openModal,
  isFavorite,
}) => {
  const { urls, location, user, similar_photos, id } = photoData;
  const handleFavToggle = () => {
    toggleFavorite(id);
  };

  const relatedImages = similar_photos
    ? Object.values(similar_photos).map((photo) => ({ ...photo, similar_photos: {} }))
    : [];

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={closeModal}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <div>
          <PhotoFavButton handleFavToggle={handleFavToggle} isFavorite={isFavorite} setFavoritePhotos={setFavoritePhotos} />
          <img src={urls.full} alt={`Photo by ${user.username}`} className="photo-details-modal__image" />
        <div className="photo-details-modal__photographer-details">
          <img
            className="photo-details-modal__photographer-profile"
            src={user.profile}
            alt={`${user.username}'s profile`}
          />
          <p className="photo-details-modal__photographer-info">{`${user.name}`}</p>
          <p className="photo-details-modal__photographer-location">{`${location.city}, ${location.country}`}</p>
        </div>
        <div className="photo-details-modal__top-bar">
          <h3 className="photo-details-modal__header">Related Photos</h3>
        </div>
        <div className="photo-details-modal__similar-photos">
          <PhotoList
            photos={relatedImages}
            toggleFavorite={toggleFavorite}
            favoritePhotos={favoritePhotos}
            openModal={openModal}
            closeModal={closeModal}
          />
        </div>
      </div>
    </div>
  );
};

export default PhotoDetailsModal;