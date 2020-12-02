import React from 'react';
import { connect } from 'react-redux';
import './CartIcon.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { toggleCartHidden } from '../../redux/cart/cartActions';
import { selectCartItemsCount } from '../../redux/cart/cartSelector';

const CartIcon = ({ toggleCartHidden, cartCount }) => {
  return (
    <div className='CartIcon' onClick={toggleCartHidden}>
      <ShoppingIcon className='ShoppingIcon' />
      <span className='ItemCount'>{cartCount}</span>
    </div>
  );
};
const mapStateToProps = (state) => ({
  cartCount: selectCartItemsCount(state),
});
const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
