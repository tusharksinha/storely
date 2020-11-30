import React from 'react';
import './MenuItem.scss';

const MenuItem = ({ title, imageUrl, size }) => {
  return (
    <div className={`${size} MenuItem`}>
      <div
        className='Background-Image'
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className='Content'>
        <h1 className='Title'>{title}</h1>
        <span className='SubTitle'>SHOP NOW</span>
      </div>
    </div>
  );
};

export default MenuItem;
