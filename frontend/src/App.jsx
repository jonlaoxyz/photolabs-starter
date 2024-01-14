// frontend/src/App.jsx
import React from 'react';

import './App.scss';

import HomeRoute from 'routes/HomeRoute';
import photos from 'mocks/photos';
import topics from 'mocks/topics';

const photosArray = Object.values(photos);
const topicsArray = Object.values(topics);


const App = () => (
  <div className="App">
    <HomeRoute photos={photosArray} topics={topicsArray} />
  </div>
);

export default App;