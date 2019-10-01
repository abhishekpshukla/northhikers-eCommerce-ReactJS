import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeButtonCheckout = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_3sQnSdjN6oaN9uPbSZRX9FZ300hVEIdVMr';

    const onToken = (token) => {
        console.log(token);
        alert('Payment Successful');
    }
    return (
        <StripeCheckout
            label='Pay Now'
            name="NorthHikers Store"
            billingAddress
            shippingAddress
            image="https://sendeyo.com/up/d/f3eb2117da"
            description={`Your total payment is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            publishableKey={publishableKey}
        />
    )
};

export default StripeButtonCheckout;