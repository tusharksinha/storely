import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import './Header.scss';

const Header = () => {
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
      </div>
    </div>
  );
};

export default Header;
