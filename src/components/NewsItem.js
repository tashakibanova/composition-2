import React from 'react';

/**
 * Компонент отдельной новости, отображает иконку, текст и ссылку.
 */
const NewsItem = ({ icon, text, link }) => {
  return (
    <div className="news-item">
      <img src={icon} alt="Иконка" />
      <a href={link}>{text}</a>
    </div>
  );
};

export default NewsItem;