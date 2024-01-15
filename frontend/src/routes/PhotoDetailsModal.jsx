import React from 'react';
import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';

const PhotoDetailsModal = ({ closeModal, photoData, toggleFavorite, favoritePhotos, openModal }) => {
  const { urls, location, user, similar_photos } = photoData;

  const relatedImages = similar_photos
    ? Object.values(similar_photos).map((photo) => ({ ...photo, similar_photos: {} }))
    : [];

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={closeModal} >
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <div>
        <img src={urls.full} alt={`Photo by ${user.username}`} className="photo-details-modal__image" />
        <div className="photo-details-modal__photographer-details">
        <img className="photo-details-modal__photographer-profile" src={user.profile} alt={`${user.username}'s profile`} />
        <p className="photo-details-modal__photographer-info">{`${user.name}`}</p>
        <p className="photo-details-modal__photographer-location">{`${location.city}, ${location.country}`}</p>
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
  )
};

export default PhotoDetailsModal;
