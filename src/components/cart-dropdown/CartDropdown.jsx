import React from 'react';
import './CartDropdown.scss';
import CustomButton from '../custom-button/CustomButton';

const CartDropdown = () => {
  return (
    <div className='CartDropdown'>
      <div className='CartItems' />
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

export default CartDropdown;
