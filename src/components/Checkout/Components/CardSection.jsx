import React from 'react';
import { CardElement, CardNumberElement, CardExpiryElement, CardCvcElement } from '@stripe/react-stripe-js';
import './CardSection.css'

const CARD_ELEMENT_OPTIONS = {
    style: {
        base: {
            color: "#343409",
            fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
            fontSmoothing: "antialiased",
            fontSize: "16px",
            "::placeholder": {
                color: "#343409",
            },
        },
        invalid: {
            color: "#fa755a",
            iconColor: "#fa755a",
        },
    },
};

function CardSection() {
    return (
        <label>
            <p>Card details</p>
            <CardElement options={CARD_ELEMENT_OPTIONS} />
            {/* <CardNumberElement></CardNumberElement>
            <CardExpiryElement></CardExpiryElement>
            <CardCvcElement></CardCvcElement> */}
        </label>
    );
};

export default CardSection;