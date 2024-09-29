import React from 'react';
import Header from './Header';
import SearchBar from './SearchBar';
import NewsList from './NewsList';
import Weather from './Weather';
import MediaSection from './MediaSection';
import './App.css';

/**
 * Основной компонент приложения, объединяет все части интерфейса.
 */
const App = () => {
  const news = [
    { icon: 'https://cdn-icons-gif.flaticon.com/7740/7740748.gif', text: 'Новость 1', link: '#' },
    { icon: 'https://cdn-icons-gif.flaticon.com/7740/7740748.gif', text: 'Новость 2', link: '#' },
    { icon: 'https://cdn-icons-gif.flaticon.com/7740/7740748.gif', text: 'Новость 3', link: '#' },
  ];

  const mediaArticles = [
    { text: 'Статья 1', link: '#', sourceName: 'Источник 1' },
    { text: 'Статья 2', link: '#', sourceName: 'Источник 2' },
    { text: 'Статья 3', link: '#', sourceName: 'Источник 3' },
    { text: 'Статья 4', link: '#', sourceName: 'Источник 4' },
    { text: 'Статья 5', link: '#', sourceName: 'Источник 5' },
  ];

  return (
    <div className="app">
      <Header />
      <div className="top-content">
        <div className="left-column">
          <div className="advertisement"><img src="https://www.mywhiteyacht.com/sites/default/files/inline-images/zdes_vassha_reklama.png" alt="Баннер" className="advertisement-image"/></div>
        </div>
        <div className="right-column">
          <MediaSection articles={mediaArticles} />
        </div>
      </div>
      <div className="search-container">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyD8NHcDrtX8eoKfIdZmlP9_7jusf0pElRWQ&s" alt="Логотип" className="logo" />
        <SearchBar />
      </div>
      <div className="banner"><img src="https://i.imgur.com/hT4qJSI.png" alt="Баннер" className="banner-image" /></div>
      <div className="content">
        <Weather temperature={25} condition="Солнечно" />
        <NewsList news={news} />
      </div>
    </div>
  );
};

export default App;