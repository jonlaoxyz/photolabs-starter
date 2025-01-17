import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton({ isFavorite, handleFavToggle }) {
  return (
    <div className="photo-list__fav-icon" onClick={handleFavToggle}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={isFavorite} />
      </div>
    </div>
  );
}

export default PhotoFavButton;