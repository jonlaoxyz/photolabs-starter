// hooks/useApplicationData.js
import { useReducer } from 'react';

const initialState = {
  isModalOpen: false,
  selectedPhoto: null,
  favoritePhotos: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'OPEN_MODAL':
      return { ...state, isModalOpen: true, selectedPhoto: action.payload };
    case 'CLOSE_MODAL':
      return { ...state, isModalOpen: false, selectedPhoto: null };
    case 'TOGGLE_FAVORITE':
      const photoId = action.payload;
      const isFavorite = state.favoritePhotos.includes(photoId);
      const newFavoritePhotos = isFavorite
        ? state.favoritePhotos.filter((id) => id !== photoId)
        : [...state.favoritePhotos, photoId];
      return { ...state, favoritePhotos: newFavoritePhotos };
    default:
      return state;
  }
};

const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const openModal = (photoData) => {
    dispatch({ type: 'OPEN_MODAL', payload: photoData });
  };

  const closeModal = () => {
    dispatch({ type: 'CLOSE_MODAL' });
  };

  const toggleFavorite = (photoId) => {
    dispatch({ type: 'TOGGLE_FAVORITE', payload: photoId });
  };

  return {
    ...state,
    openModal,
    closeModal,
    toggleFavorite,
  };
};

export default useApplicationData;