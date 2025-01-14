import React from 'react';
import '../styles/Banner.scss';

const Banner = ({ text }) => {
  return (
    <div className="banner">
      <h1>{text}</h1>
    </div>
  );
};

export default Banner;
