import React, { Component } from 'react';

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
        pending: false,
        error: '',
        stripe__id: '' 
    }

    async componentWillMount() {
        const intent = await paymentAPi.createIntent([this.createIntentBasket(), this.props.userProfile.user_id]);
        this.setState({ client_secret: intent.client_secret })
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
                    clearBasket={this.props.clearBasket.bind(this)}
                    setConfirmedBasket={this.props.setConfirmedBasket.bind(this)}
                    deliveryAddress={this.props.deliveryAddress}
                    setConfirmedOrder={this.props.setConfirmedOrder.bind(this)}
                    />
                </div>
                {this.state.error.length > 0 && <p style={{error: '#c62d1f'}}>{this.state.error}</p>}
            </Elements>
        )
    }

    getAmount() {
        const price = Object.values(this.props.basket).reduce((acc, item) => {
            acc += item.qty * item.product_price;
            return acc;
        }, 0);
        return price.toString().split('.')[1].length > 2 ? price.toFixed(2) : price;
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