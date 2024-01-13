import React from "react";

import "../styles/TopicListItem.scss";


const TopicListItem = ({ topicData }) => {
  const { id, slug, title } = topicData;
  return (
    <div className="topic-list__item">
      <span title={`${slug}`} key={id} >{`${title}`}</span>
    </div>
  );
};

export default TopicListItem;
