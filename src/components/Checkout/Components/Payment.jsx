import React, { Component } from 'react';

import StripeCheckout from 'react-stripe-checkout';
import * as paymentAPi from '../../../routes/paymentRoutes';

import PaymentForm from './PaymentForm'

import '../../../shared/shared.css';

import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';


// const stripe = require('stripe')('pk_test_0J5atEpEuRpL4XuNsm1aFBCU006SHgnIHs');
const stripePromise = loadStripe("pk_test_0J5atEpEuRpL4XuNsm1aFBCU006SHgnIHs");




class Payment extends Component {
    state = {
        confirmed: false,
        client_secret: '',
        pending: false
    }

    async componentWillMount() {
        const intent = await paymentAPi.createIntent([this.createIntentBasket()], this.props.userProfile.user_id);
        this.setState({ client_secret: intent.client_secret }, () => console.log(this.state.client_secret, '<<<<<'))

    }

    render() {

        return (
            <Elements stripe={stripePromise}>
                <h2>Payment</h2>
                <h4>£{this.getAmount()}</h4>
                <div className="shadowBox">
                    <PaymentForm
                    userProfile={this.props.userProfile}
                    client_secret={this.state.client_secret}
                    changeIndex={this.props.changeIndex.bind(this)}
                    setPending={this.setPending.bind(this)}
                    pending={this.state.pending}
                    />
                </div>
            </Elements>
        )
    }

    getAmount() {
        return Object.values(this.props.basket).reduce((acc, item) => {
            acc += item.qty * item.product_price;
            return acc;
        }, 0);
    }

    createIntentBasket() {
        return Object.values(this.props.basket).reduce((acc, item) => {
            acc[item.product_id] = {
                product_id: item.product_id,
                qty: item.qty
            };
            return acc;
        }, {})
    }

    setPending() {
        this.setState({pending: !this.state.pending})
    }
}

export default Payment;