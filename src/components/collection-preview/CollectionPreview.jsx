import React from 'react';
import CollectionItem from '../collection-item/CollectionItem';
import './CollectionPreview.scss';

const CollectionPreview = ({ title, items }) => {
  return (
    <div className='CollectionPreview'>
      <h1 className='Title'>{title.toUpperCase()}</h1>
      <div className='Preview'>
        {items
          .filter((item, idx) => idx < 4)
          .map(({ id, ...otherItemProps }) => (
            <CollectionItem key={id} {...otherItemProps} />
          ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
