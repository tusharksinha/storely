import React from 'react';
import './CartItem.scss';

const CartItem = ({ item: { name, imageUrl, price, quantity } }) => {
  return (
    <div className='CartItem'>
      <img src={imageUrl} alt={name} />
      <div className='ItemDetails'>
        <span className='Name'>{name}</span>
        <span>
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
