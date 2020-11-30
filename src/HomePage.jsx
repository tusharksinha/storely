import React from 'react';
import './HomePage.scss';

const HomePage = () => {
  return (
    <div className='HomePage'>
      <div className='Menu'>
        <div className='MenuItem'>
          <div className='Content'>
            <h1 className='Title'>HATS</h1>
            <span className='SubTitle'>SHOP NOW</span>
          </div>
        </div>
        <div className='MenuItem'>
          <div className='Content'>
            <h1 className='Title'>JACKETS</h1>
            <span className='SubTitle'>SHOP NOW</span>
          </div>
        </div>
        <div className='MenuItem'>
          <div className='Content'>
            <h1 className='Title'>SNEAKERS</h1>
            <span className='SubTitle'>SHOP NOW</span>
          </div>
        </div>
        <div className='MenuItem'>
          <div className='Content'>
            <h1 className='Title'>MENS</h1>
            <span className='SubTitle'>SHOP NOW</span>
          </div>
        </div>
        <div className='MenuItem'>
          <div className='Content'>
            <h1 className='Title'>WOMENS</h1>
            <span className='SubTitle'>SHOP NOW</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
