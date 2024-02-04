import React from "react";
import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const TopicList = ({ topics, onTopicClick }) => {
  return (
    <div className="top-nav-bar__topic-list">
      {topics.map((topicData) => (
        <TopicListItem
          key={topicData.id}
          topicData={topicData}
          onClick={onTopicClick}
        />
      ))}
    </div>
  );
};

export default TopicList;