import React from 'react';
import './CollectionItem.scss';

const CollectionItem = ({ name, imageUrl, price }) => {
  return (
    <div className='CollectionItem'>
      <div className='Image' style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className='CollectionFooter'>
        <span className='Name'>{name}</span>
        <span className='Price'>{price}</span>
      </div>
    </div>
  );
};

export default CollectionItem;
