
import React from "react";
import "../styles/PhotoListItem.scss";

const PhotoListItem = ({ photoData }) => {
  const { id, location, imageSource, username, profile } = photoData;

  return (
    <div className="photo-list-item photo-list__item">
      <img className="photo-list__image" src={imageSource} alt={`Photo by ${username}`}  key={id} />
      <div className="details photo-list__user-details">
        <img className="profile-img photo-list__user-profile" src={profile} alt={`${username}'s profile`} />
        <p className="photo-list__user-info">{`${username}`}</p>
        <p className="photo-list__user-location">{`${location.city}, ${location.country}`}</p>
        
      </div>
    </div>
  );
};

export default PhotoListItem;
