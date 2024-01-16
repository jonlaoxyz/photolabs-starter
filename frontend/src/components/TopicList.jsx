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
          onClick={onTopicClick} // Pass the onTopicClick function to each TopicListItem
        />
      ))}
    </div>
  );
};

export default TopicList;