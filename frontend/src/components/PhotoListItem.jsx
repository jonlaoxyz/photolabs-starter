
import React from "react";
import PhotoFavButton from "./PhotoFavButton"; 
import "../styles/PhotoListItem.scss";

const PhotoListItem = ({ photoData, toggleFavorite, isFavorite, openModal }) => {
  const { id, location, urls, user } = photoData;
  const handleFavToggle = () => {
    toggleFavorite(id);
  };

  const handleItemClick = () => {
    openModal && openModal(photoData);
  };

  return (
    <div className="photo-list__item">
      <PhotoFavButton handleFavToggle={handleFavToggle} isFavorite={isFavorite} />
      <img className="photo-list__image" src={urls.regular} alt={`Photo by ${user.username}`} key={id} onClick={handleItemClick} />
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={user.profile} alt={`${user.username}'s profile`} />
        <p className="photo-list__user-info">{`${user.name}`}</p>
        <p className="photo-list__user-location">{`${location.city}, ${location.country}`}</p>
        
      </div>

    </div>
  );
  
};

export default PhotoListItem;



