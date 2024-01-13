
import React from "react";
import PhotoFavButton from "./PhotoFavButton"; 
import "../styles/PhotoListItem.scss";

const PhotoListItem = ({ photoData }) => {
  const { id, location, urls, user } = photoData;

  return (
    <div className="photo-list__item">
      <PhotoFavButton />
      <img className="photo-list__image" src={urls.regular} alt={`Photo by ${user.username}`}  key={id} />
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={user.profile} alt={`${user.username}'s profile`} />
        <p className="photo-list__user-info">{`${user.name}`}</p>
        <p className="photo-list__user-location">{`${location.city}, ${location.country}`}</p>
        
      </div>

    </div>
  );
  
};

export default PhotoListItem;



