import React from 'react';
import './CollectionsOverview.scss';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CollectionPreview from '../../components/collection-preview/CollectionPreview';
import { selectCollectionsForPreview } from '../../redux/shop/shopSelector';

const CollectionsOverview = ({ collections }) => {
  return (
    <div className='CollectionsOverview'>
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(CollectionsOverview);
