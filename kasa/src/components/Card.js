// src/components/Card.js
import React from 'react';
import '../styles/Card.scss';


const Card = ({ title, cover }) => {
  const cardStyle = {
    backgroundImage: `url(${cover})`
  };

  return (
    <div className="card" style={cardStyle}>
      <div className="card-content">
        <h2>{title}</h2>
      </div>
    </div>
  );
};

export default Card;
