import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <nav>
        <ul className="nav-links">
          <li><a href="#videos">Видео</a></li>
          <li><a href="#images">Картинки</a></li>
          <li><a href="#news">Новости</a></li>
          <li><a href="#maps">Карты</a></li>
          <li><a href="#market">Маркет</a></li>
          <li><a href="#translator">Переводчик</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;