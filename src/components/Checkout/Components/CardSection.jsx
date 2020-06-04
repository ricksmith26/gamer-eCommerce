import React from 'react';

import './CardSection.css'

import { CardElement } from '@stripe/react-stripe-js';

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
        </label>
    );
};

export default CardSection;