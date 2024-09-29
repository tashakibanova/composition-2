import React from 'react';
import NewsItem from './NewsItem';

/**
 * Компонент списка новостей, отображает группу новостей.
 */
const NewsList = ({ news }) => {
  return (
    <div className="news-list">
      {news.map((item, index) => (
        <NewsItem key={index} icon={item.icon} text={item.text} link={item.link} />
      ))}
    </div>
  );
};

export default NewsList;