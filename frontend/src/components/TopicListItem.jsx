import React from "react";
import "../styles/TopicListItem.scss";

const TopicListItem = ({ topicData, onClick }) => {
  const { id, slug, title } = topicData;

  const handleClick = () => {
    onClick(id);
  };

  return (
    <div className="topic-list__item" onClick={handleClick}>
      <span title={`${slug}`}>{`${title}`}</span>
    </div>
  );
};

export default TopicListItem;