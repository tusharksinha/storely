import React from 'react';
import './CheckoutItem.scss';

const CheckoutItem = ({ cartItem: { name, imageUrl, price, quantity } }) => {
  return (
    <div className='CheckoutItem'>
      <div className='ImageContainer'>
        <img src={imageUrl} alt={name} />
      </div>
      <span className='Name'>{name}</span>
      <span className='Quantity'>{quantity}</span>
      <span className='Price'>${price}</span>
      <div className='RemoveButton'>&#10005;</div>
    </div>
  );
};

export default CheckoutItem;
