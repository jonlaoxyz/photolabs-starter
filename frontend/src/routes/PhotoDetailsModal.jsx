import React from 'react';
import PhotoFavButton from 'components/PhotoFavButton';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';
import '../styles/PhotoDetailsModal.scss';
import '../styles/PhotoFavButton.scss';

const PhotoDetailsModal = ({
  toggleFavorite,
  favoritePhotos,
  photoData,
  openModal,
  closeModal,
}) => {
  const { urls, location, user, similar_photos, id } = photoData;
  
  const isFavorite = favoritePhotos.includes(id);
  
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
        <div className="photo-details-modal_image-holder">
            <PhotoFavButton
              isFavorite={isFavorite}
              handleFavToggle={handleFavToggle}
              toggleFavorite={toggleFavorite}
            />
            <img src={urls.full} alt={`Photo by ${user.username}`} className="photo-details-modal__image" />
        </div>
        <div className="photo-details-modal__photographer-details">
          <img
            className="photo-details-modal__photographer-profile"
            src={user.profile}
            alt={`${user.username}'s profile`}
          />
          <span>
          <span className="photo-details-modal__photographer-info">{`${user.name}`}</span><br />
          <span className="photo-details-modal__photographer-location">{`${location.city}, ${location.country}`}</span>
          </span>
        </div>
        <h3 className="photo-details-modal__header">Related Photos</h3>
        <div className="photo-details-modal__top-bar">
            <PhotoList
              photos={relatedImages}
              toggleFavorite={toggleFavorite}
              favoritePhotos={favoritePhotos}
              isFavorite={isFavorite}
              openModal={openModal}
              closeModal={closeModal}
              smallThumbnails={true}
            />
        </div>
      </div>
    </div>
  );
};

export default PhotoDetailsModal;