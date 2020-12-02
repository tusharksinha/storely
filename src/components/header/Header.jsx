import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import './Header.scss';
import { auth } from '../firebase/firebase';
import CartIcon from '../cart-icon/CartIcon';
import CartDropdown from '../cart-dropdown/CartDropdown';

const Header = ({ currentUser, hidden }) => {
  return (
    <div className='Header'>
      <Link to='/' className='LogoContainer'>
        <Logo className='Logo' />
      </Link>
      <div className='Options'>
        <Link to='/shop' className='Option'>
          SHOP
        </Link>
        <Link to='/contact' className='Option'>
          CONTACT
        </Link>
        {currentUser ? (
          <div className='Option' onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link to='/signin'>SIGN IN</Link>
        )}
        <CartIcon />
      </div>
      {!hidden ? <CartDropdown /> : null}
    </div>
  );
};
const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
  currentUser,
  hidden,
});

export default connect(mapStateToProps)(Header);
