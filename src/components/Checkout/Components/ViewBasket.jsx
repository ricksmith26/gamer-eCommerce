import React, {Component} from 'react';

import './ViewBasket.css';

class ViewBasket extends Component {
    
    state = {
        
    }

    render() {

        return (
            <div className="ViewBasketContainer">
                <h2 className="viewBasketTitle">Checkout</h2>
                    <div className={`${this.props.screenWidth < 650 ? 'mobileContents' : 'basketContents' }`}>
                    {Object.values(this.props.basket).length === 0 && <div>Your Basket is Empty</div>}
                    {Object.values(this.props.basket).map((item, i) => {
                        return (
                            <div className="checkoutItem" style={{marginTop: i === 0 ? '0px' : '8px'}}>
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
                    </div>
            </div>
        )
    }
}

export default ViewBasket;