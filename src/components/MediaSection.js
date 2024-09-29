import React from 'react';

/**
 * Компонент "Сейчас в СМИ", отображает список из 5 элементов с нумерацией и ссылкой на источник.
 */
const MediaSection = ({ articles }) => {
  return (
    <div className="media-section">
      <h2>Сейчас в СМИ</h2>
      <ul>
        {articles.map((article, index) => (
          <li key={index}>
            {index + 1}. <a href={article.link}>{article.text}</a> (Источник: {article.sourceName})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MediaSection;