import React from 'react';
import { Route } from 'react-router-dom';
import './ShopPage.scss';
import CollectionsOverview from '../../components/collections-overview/CollectionsOverview';
import CollectionPage from '../collection/CollectionPage';

const ShopPage = ({ match }) => {
  return (
    <div className='ShopPage'>
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  );
};

export default ShopPage;
