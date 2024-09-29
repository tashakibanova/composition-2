import React from 'react';

/**
 * Компонент строки поиска, позволяет пользователям искать контент.
 */
const SearchBar = () => {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Поиск..." />
      <button>Найти</button>
    </div>
  );
};

export default SearchBar;