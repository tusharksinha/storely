import React from 'react';
import './CollectionItem.scss';
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cartActions';
import CustomButton from '../custom-button/CustomButton';

const CollectionItem = ({ item, addItem }) => {
  const { name, imageUrl, price } = item;
  return (
    <div className='CollectionItem'>
      <div className='Image' style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className='CollectionFooter'>
        <span className='Name'>{name}</span>
        <span className='Price'>{price}</span>
      </div>
      <CustomButton inverted onClick={() => addItem(item)}>
        ADD TO CART
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
