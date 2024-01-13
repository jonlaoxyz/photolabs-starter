// frontend/src/App.jsx
import React from 'react';

import PhotoList from './components/PhotoList';
import './App.scss';
import TopicList from 'components/TopicList';
import TopNavigationBar from 'components/TopNavigationBar';


const App = () => (
  <div className="App">
    <TopNavigationBar />
    <PhotoList/>

  </div>
);

export default App;