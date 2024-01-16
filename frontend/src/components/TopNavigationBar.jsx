import React from 'react';

import '../styles/TopNavigationBar.scss';
import TopicList from './TopicList';
import FavBadge from './FavBadge';

const TopNavigation = ({ topics, isFavPhotoExist, onTopicClick }) => {
  return (
    <div className="top-nav-bar">
      <h1 className="top-nav-bar__logo"><a href='/'>PhotoLabs</a></h1>
      <TopicList topics={topics} onTopicClick={onTopicClick} />
      <FavBadge isFavPhotoExist={isFavPhotoExist} />
    </div>
  );
};

export default TopNavigation;