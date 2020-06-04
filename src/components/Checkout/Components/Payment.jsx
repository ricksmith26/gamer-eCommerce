import React, { Component } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

import '../../../shared/shared.css';

import * as paymentAPi from '../../../routes/paymentRoutes';
import PaymentForm from './PaymentForm'

// need to move this to a credentials file
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
                        setError={this.setError}
                    />
                </div>
                {this.state.error.length > 0 && <p style={{error: '#c62d1f'}}>{this.state.error}</p>}
            </Elements>
        )
    }
    // calculate total for FE purpose only
    getAmount() {
        const price = Object.values(this.props.basket).reduce((acc, item) => {
            acc += item.qty * item.product_price;
            return acc;
        }, 0);
        return price.toString().split('.')[1].length > 2 ? price.toFixed(2) : price;
    }

    // create payment intent token based on total
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

    setError = (error) => {
        this.setState({error, pending: false})
    }
}

export default Payment;