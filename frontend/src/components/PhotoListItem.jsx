
import React from "react";
import "../styles/PhotoListItem.scss";

const PhotoListItem = ({ photoData }) => {
  const { id, location, imageSource, username, profile } = photoData;

  return (
    <div className="photo-list-item">
      <img src={imageSource} alt={`Photo by ${username}`}  key={id} />
      <img className="profile-img" src={profile} alt={`${username}'s profile`} />
      <div className="details">
        <p>{`Username: ${username}`}</p>
        <p>{`Location: ${location.city}, ${location.country}`}</p>
      </div>
    </div>
  );
};

export default PhotoListItem;
