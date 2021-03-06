import React, { Component } from 'react';

import './ViewBasket.css';

class ViewBasket extends Component {

    state = {
    }

    render() {

        return (
            <div className="ViewBasketContainer">

                {!this.props.complete && <h2 className="viewBasketTitle">Checkout</h2>}
                <div className='basketContents'>
                    {Object.values(this.props.basket).length === 0 && <div>Your Basket is Empty</div>}
                    {Object.values(this.props.basket).map((item, i) => {
                        return (
                            <div className="checkoutItem" style={{ marginTop: i === 0 ? '0px' : '8px' }} key={item.product_name}>
                                <div className="qtyName">
                                    <div className="itemQty">{item.qty} x </div>
                                    <div className="itemName">{item.product_name}</div>
                                </div>
                                <div className="qtyName">
                                    <div className="itemPrice">£{item.product_price}</div>
                                    {!this.props.complete &&    <div className="checkoutAdj">
                                                                    <div className="addBtn" onClick={() => this.props.addRemoveFromBasket('up', item.product_id)}>+</div>
                                                                    <div className="removeBtn" onClick={() => this.props.addRemoveFromBasket('down', item.product_id)}>-</div>
                                                                    <div className="deleteBtn" onClick={() => this.props.deleteFromBasket(item.product_id)}>Remove</div>
                                                                </div>}
                                    </div>
                                </div>)
                    })}
                    <div className="checkoutItem" style={{ marginTop: '8px' }}>
                        <div>Total: </div>
                        <div className="itemPrice">£{this.getTotal().toFixed(2)}</div>
                    </div>

                </div>
                {!this.props.complete && <button className="yellowBtn roundedYellow" style={{ marginTop: '24px' }} onClick={() => this.props.changeIndex(1)} disabled={Object.values(this.props.basket).length === 0}>Proceed to Delivery</button>}

            </div>
        )
    }
    // returns total of basket
    getTotal() {
        return Object.values(this.props.basket).reduce((acc, item) => {
            acc += (Number(item.qty) * Number(item.product_price));
            return acc;
        }, 0)
    }
}

export default ViewBasket;