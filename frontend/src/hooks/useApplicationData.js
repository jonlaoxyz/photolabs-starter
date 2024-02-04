// hooks/useApplicationData.js
import { useReducer, useEffect } from 'react';

const initialState = {
  isModalOpen: false,
  selectedPhoto: null,
  favoritePhotos: [],
  photoData: [],
  topicData: [],
  currentTopicPhotos: [],
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
    case 'SET_FAVORITE_PHOTOS':
      return { ...state, favoritePhotos: action.payload };
    case 'SET_PHOTO_DATA':
      return { ...state, photoData: action.payload };
    case 'SET_TOPIC_DATA':
      return { ...state, topicData: action.payload };
    case 'SET_CURRENT_TOPIC_PHOTOS':
      return { ...state, currentTopicPhotos: action.payload };
    default:
      return state;
  }
};

const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch("/api/photos")
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: 'SET_PHOTO_DATA', payload: data });
      })
      .catch((error) => console.error('Error fetching photo data:', error));
  }, []);
  
  useEffect(() => {
    fetch("/api/topics")
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: 'SET_TOPIC_DATA', payload: data });
      })
      .catch((error) => console.error('Error fetching topic data:', error));
  }, []);

  const fetchPhotosByTopic = async (topicId) => {
    try {
      const response = await fetch(`/api/topics/photos/${topicId}`);
      const data = await response.json();
      dispatch({ type: 'SET_CURRENT_TOPIC_PHOTOS', payload: data });
    } catch (error) {
      console.error('Error fetching photos by topic:', error);
    }
  };


  const openModal = (photoData) => {
    dispatch({ type: 'OPEN_MODAL', payload: photoData });
  };

  const closeModal = () => {
    dispatch({ type: 'CLOSE_MODAL' });
  };

  const setFavoritePhotos = (newFavoritePhotos) => {
    dispatch({ type: 'SET_FAVORITE_PHOTOS', payload: newFavoritePhotos });
  };

  const toggleFavorite = (photoId) => {
    dispatch({ type: 'TOGGLE_FAVORITE', payload: photoId });
  };

  return {
    ...state,
    openModal,
    closeModal,
    toggleFavorite,
    fetchPhotosByTopic,
    setFavoritePhotos,
  };
};

export default useApplicationData;