import React from 'react';
import { connect } from 'react-redux';
import './CartDropdown.scss';
import CustomButton from '../custom-button/CustomButton';
import CartItem from '../cart-item/CartItem';
import { selectCartItems } from '../../redux/cart/cartSelector';

const CartDropdown = ({ cartItems }) => {
  return (
    <div className='CartDropdown'>
      <div className='CartItems'>
        {cartItems &&
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))}
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});

export default connect(mapStateToProps)(CartDropdown);
