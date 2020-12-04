import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  selectCartItems,
  selectCartTotal,
} from '../../redux/cart/cartSelector';
import './Checkout.scss';
import CheckoutItem from '../../components/checkout-item/CheckoutItem';
import StripeButton from '../../components/stripe/StripeButton';

const Checkout = ({ cartItems, total }) => {
  console.log(total);
  return (
    <div className='CheckoutPage'>
      <div className='CheckoutHeader'>
        <div className='HeaderBlock'>
          <span>Product</span>
        </div>
        <div className='HeaderBlock'>
          <span>Description</span>
        </div>
        <div className='HeaderBlock'>
          <span>Quantity</span>
        </div>
        <div className='HeaderBlock'>
          <span>Price</span>
        </div>
        <div className='HeaderBlock'>
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className='Total'>
        <span>Total: ${total}</span>
      </div>
      <div className='TestWarning'>
        *Please use the following credit card in test mode
        <br />
        Card No: 4242 4242 4242 4242 | Expiry: any future date(MM/YY) | CVV: 123
      </div>
      <StripeButton price={total} />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(Checkout);
