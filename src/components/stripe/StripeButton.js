import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51HuX2dIg6v42MImWFrvL1RnHkCU6VnGuSWSV9okqtPAUwupuokte9bB54ZnLGxhZLaLZiHoM2bxhYtSFGVgC5fAH00IuipeXWi';
  const onToken = (token) => {
    console.log(token);
    alert('Payment successful');
  };
  return (
    <StripeCheckout
      label='CHECK OUT'
      name='Storely'
      billingAddress
      shippingAddress
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeButton;
