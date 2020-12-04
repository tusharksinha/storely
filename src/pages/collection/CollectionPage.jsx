import React from 'react';
import { connect } from 'react-redux';

import './CollectionPage.scss';
import CollectionItem from '../../components/collection-item/CollectionItem';
import { selectCollection } from '../../redux/shop/shopSelector';

const CollectionPage = ({ match, collection }) => {
  const { title, items } = collection;
  console.log(match.params.collectionId);
  console.log(collection);
  return (
    <div className='CollectionPage'>
      <div className='Title'>{title.toUpperCase()}</div>
      <div className='Items'>
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
