import React from 'react';
import { withRouter } from 'react-router-dom';
import './MenuItem.scss';

const MenuItem = ({ title, imageUrl, size, linkUrl, match, history }) => {
  console.log(match.url, history);
  return (
    <div
      className={`${size} MenuItem`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
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

export default withRouter(MenuItem);
