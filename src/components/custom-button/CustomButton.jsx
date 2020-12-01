import React from 'react';
import './CustomButton.scss';

const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => {
  return (
    <button
      className={`${isGoogleSignIn ? 'GoogleSignIn' : ''} CustomButton`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;
