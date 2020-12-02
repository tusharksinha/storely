import React from 'react';
import { connect } from 'react-redux';
import {
  clearItemFromCart,
  addItem,
  removeItem,
} from '../../redux/cart/cartActions';
import './CheckoutItem.scss';

const CheckoutItem = ({ cartItem, clearCartItem, addItem, removeItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className='CheckoutItem'>
      <div className='ImageContainer'>
        <img src={imageUrl} alt={name} />
      </div>
      <span className='Name'>{name}</span>

      <span className='Quantity'>
        <div className='Arrow' onClick={() => removeItem(cartItem)}>
          &#10094;
        </div>
        <span className='Value'>{quantity}</span>
        <div className='Arrow' onClick={() => addItem(cartItem)}>
          &#10095;
        </div>
      </span>

      <span className='Price'>${price}</span>
      <div className='RemoveButton' onClick={() => clearCartItem(cartItem)}>
        &#10005;
      </div>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  clearCartItem: (item) => dispatch(clearItemFromCart(item)),
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
