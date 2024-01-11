
import React from "react";
import "../styles/PhotoListItem.scss";

const PhotoListItem = ({ data }) => {
  const { id, location, imageSource, username, profile } = data;

  return (
    <div className="photo-list-item" key={id}>
      <img src={imageSource} alt={`Photo by ${username}`} />
      <img className="profile-img" src={profile} alt={`${username}'s profile`} />
      <div className="details">
        <p>{`Username: ${username}`}</p>
        <p>{`Location: ${location.city}, ${location.country}`}</p>
      </div>
    </div>
  );
};

export default PhotoListItem;
