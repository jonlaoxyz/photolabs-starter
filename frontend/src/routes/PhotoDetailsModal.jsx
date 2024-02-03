import React from 'react';
import '../styles/PhotoDetailsModal.scss';
import '../styles/PhotoFavButton.scss';
import PhotoFavButton from 'components/PhotoFavButton';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';

const PhotoDetailsModal = ({
  toggleFavorite,
  setFavoritePhotos,
  favoritePhotos,
  isFavorite,
  photoData,
  openModal,
  closeModal,
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
        <div className="photo-details-modal_image-holder">
            <PhotoFavButton
              isFavorite={isFavorite}
              handleFavToggle={handleFavToggle}
              toggleFavorite={toggleFavorite}
              setFavoritePhotos={setFavoritePhotos}
              openModal={openModal}
              closeModal={closeModal}
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
              setFavoritePhotos={setFavoritePhotos}
              isFavorite={isFavorite}
              handleFavToggle={handleFavToggle}
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