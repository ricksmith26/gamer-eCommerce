import React, { Component } from 'react';

import StripeCheckout from 'react-stripe-checkout';

const stripe = require('stripe')('pk_test_0J5atEpEuRpL4XuNsm1aFBCU006SHgnIHs');

class Payment extends Component {
    state = {
        confirmed: false
    }

    componentDidMount() {
        
    }

    render() {

        return (
            <div>
                {!this.state.confirmed
                && <StripeCheckout
                    stripeKey="pk_test_0J5atEpEuRpL4XuNsm1aFBCU006SHgnIHs"
                    token={this.handleToken}
                    amount={this.getAmount()}
                    currency='GBP'
                    closed={this.onClosed}
                    ></StripeCheckout>}
                { this.state.confirmed && <button onClick={() => this.props.changeIndex(3)}>Confirm</button>}
            </div>
        )
    }

    handleToken(token, addresses) {
        // var paymentRequest = stripe.paymentRequest({
        //     country: 'US',
        //     currency: 'usd',
        //     total: {
        //       label: 'Demo total',
        //       amount: 1000,
        //     },
        //     requestPayerName: true,
        //     requestPayerEmail: true,
        //   });
        // paymentRequest.on(token, function(event) {
        //     // event.token is available
        //     console.log(event, 'EVENT TOKEN<<<<<')
        //   });
        console.log(token, addresses, 'token, addressestoken, addresses')
    }

    onClosed() {
        console.log('ONCLOSE<<<<<')
        // var paymentRequest = stripe.paymentRequest({
        //     country: 'US',
        //     currency: 'usd',
        //     total: {
        //       label: 'Demo total',
        //       amount: 1000,
        //     },
        //     requestPayerName: true,
        //     requestPayerEmail: true,
        //   });
        // paymentRequest.on('token', function(event) {
        //     // event.token is available
        //   });
    }

    getAmount() {
        return Object.values(this.props.basket).reduce((acc, item) => {
            acc+= item.qty * item.product_price;
            return acc;
        }, 0) * 100;
    }
    
}

export default Payment;