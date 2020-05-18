import React, { Component } from 'react';

import './ViewBasket.css';
import { Link } from 'react-router-dom';

class ViewBasket extends Component {

    state = {

    }

    render() {

        return (
            <div className="ViewBasketContainer">
                <h2 className="viewBasketTitle">Checkout</h2>
                <div className={`${this.props.screenWidth < 650 ? 'mobileContents' : 'basketContents'}`}>
                    {Object.values(this.props.basket).length === 0 && <div>Your Basket is Empty</div>}
                    {Object.values(this.props.basket).map((item, i) => {
                        return (
                            <div className="checkoutItem" style={{ marginTop: i === 0 ? '0px' : '8px' }}>
                                <div className="qtyName">
                                    <div className="itemQty">{item.qty} x </div>
                                    <div className="itemName">{item.product_name}</div>
                                </div>
                                <div className="qtyName">
                                    <div className="itemPrice">£{item.product_price}</div>
                                    <div className="checkoutAdj">
                                        <div className="addBtn" onClick={() => this.props.addRemoveFromBasket('up', item.product_id)}>+</div>
                                        <div className="removeBtn" onClick={() => this.props.addRemoveFromBasket('down', item.product_id)}>-</div>
                                        <div className="deleteBtn" onClick={() => this.props.deleteFromBasket(item.product_id)}>Remove</div>
                                    </div>
                                </div>
                            </div>)
                    })}
                    <div className="checkoutItem" style={{ marginTop: '8px' }}>
                        <div>Total: </div>
                        <div className="itemPrice">£{this.getTotal()}</div>
                    </div>

                </div>
                <button className="yellowBtn" style={{ marginTop: '24px' }} onClick={() => this.props.changeIndex(1)}>Proceed to Delivery</button>

            </div>
        )
    }

    getTotal() {
        return Object.values(this.props.basket).reduce((acc, item) => {
            acc += item.qty * item.product_price;
            return acc.toString().split('.')[1] && acc.toString().split('.')[1].length > 2 ? acc.toFixed(2) : acc;
        }, 0)
    }
}

export default ViewBasket;