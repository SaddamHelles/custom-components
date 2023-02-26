import './AnimalShow.css';
import React, { useState } from 'react';
import heartSvg from '../images/animals/heart.svg';

const AnimalShow = ({ type }) => {
  const [clicks, setClicks] = useState(0);

  const handleClick = () => {
    setClicks(prev => prev + 1);
  };
  return (
    <div className="animal-show" onClick={handleClick}>
      <img
        className="animal"
        src={require(`../images/animals/${type}.svg`)}
        alt={type}
        width="200px"
      />
      <img
        className="heart"
        src={heartSvg}
        alt="heart"
        width={10 + 10 * clicks}
      />
    </div>
  );
};

export default AnimalShow;
