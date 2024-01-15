// hooks/useApplicationData.js
import { useReducer, useEffect } from 'react';

const initialState = {
  isModalOpen: false,
  selectedPhoto: null,
  favoritePhotos: [],
  photoData: [],
  topicData: []
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
    case 'SET_PHOTO_DATA':
      return { ...state, photoData: action.payload };
    case 'SET_TOPIC_DATA':
      return { ...state, topicData: action.payload };
    default:
      return state;
  }
};

const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Effect to make the GET request and set photo data to the state
  useEffect(() => {
    fetch("/api/photos")
      .then((response) => response.json())
      .then((data) => dispatch({ type: 'SET_PHOTO_DATA', payload: data }));
  }, []);

  useEffect(() => {
    fetch("/api/topics")
      .then((response) => response.json())
      .then((data) => dispatch({ type: 'SET_TOPIC_DATA', payload: data }));
  }, []);

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