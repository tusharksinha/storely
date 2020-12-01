import React, { Component } from 'react';
import SHOP_DATA from './ShopData';
import CollectionPreview from '../../components/collection-preview/CollectionPreview';
import './ShopPage.scss';

class ShopPage extends Component {
  state = {
    collections: SHOP_DATA,
  };
  render() {
    const { collections } = this.state;
    return (
      <div className='ShopPage'>
        {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}
export default ShopPage;
