import React from 'react';
import './CustomButton.scss';

const CustomButton = ({
  children,
  inverted,
  isGoogleSignIn,
  ...otherProps
}) => {
  return (
    <button
      className={`${isGoogleSignIn ? 'GoogleSignIn' : ''} ${
        inverted ? 'Inverted' : ''
      } CustomButton`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;
