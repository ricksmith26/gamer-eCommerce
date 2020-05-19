import React from 'react';
import {useStripe, useElements, CardElement} from '@stripe/react-stripe-js';

import CardSection from './CardSection';
import '../../../shared/shared.css';

export default function PaymentForm(props) {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }
    props.setPending();
    const result = await stripe.confirmCardPayment(props.client_secret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: `${props.userProfile.user_first_name} ${props.userProfile.user_last_name}`,
        },
      }
    });

    if (result.error) {
      // Show error to your customer (e.g., insufficient funds)
      console.log(result.error.message);
    } else {
      // The payment has been processed!
      if (result.paymentIntent.status === 'succeeded') {
          props.changeIndex(3);
          console.log(result.paymentIntent.status)
        // Show a success message to your customer
        // There's a risk of the customer closing the window before callback
        // execution. Set up a webhook or plugin to listen for the
        // payment_intent.succeeded event that handles any business critical
        // post-payment actions.
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardSection />
      {!props.pending ? <button className="yellowBtn" style={{marginTop: '24px'}} disabled={!stripe}>Confirm order</button>
      : <div>
          pedning
      </div>}
    </form>
  );
}