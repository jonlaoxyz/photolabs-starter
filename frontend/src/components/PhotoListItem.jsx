import React from "react";
import PhotoFavButton from "./PhotoFavButton"; 
import "../styles/PhotoListItem.scss";

const PhotoListItem = ({
  toggleFavorite,
  favoritePhotos,
  photoData,
  openModal,
  smallThumbnails,
  }) => {

  const { id, location, urls, user } = photoData;

  const isFavorite = favoritePhotos.includes(id);
    
  const handleFavToggle = () => {
    toggleFavorite(id);
  };

  const handleItemClick = () => {
    openModal && openModal(photoData);
  };

  return (
    <div className="photo-list__item">
      <PhotoFavButton
        isFavorite={isFavorite}
        handleFavToggle={handleFavToggle}
        toggleFavorite={toggleFavorite}
      />
      <img className={`photo-list__image ${smallThumbnails ? 'small-thumbnail' : ''}`}
        src={urls.full} alt={`Photo by ${user.username}`} key={id} onClick={handleItemClick} />
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={user.profile} alt={`${user.username}'s profile`} />
        <span>
          <span className="photo-list__user-info">{`${user.name}`}</span><br />
          <span className="photo-list__user-location">{`${location.city}, ${location.country}`}</span>
        </span>
      </div>
    </div>
  );
};

export default PhotoListItem;