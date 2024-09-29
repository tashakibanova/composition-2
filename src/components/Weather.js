import React from 'react';

/**
 * Компонент погоды, отображает текущую погоду с анимацией.
 */
const Weather = ({ temperature, condition }) => {
  return (
    <div className="weather animated">
      <h2>Погода</h2>
      <p>Температура: {temperature}°C</p>
      <p>Состояние: {condition}</p>
    </div>
  );
};

export default Weather;