import React, { Component } from 'react';

import './DeliveryAddress.css';

class DeliveryAddress extends Component {
    state = {
        sameDeliveryAddress: true,
        
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className="ViewBasketContainer">
                <h2 className="viewBasketTitle">Delivery Address</h2>
                <div>
                    <h4>Billing Address</h4>
                    <p>{this.props.userProfile.user_address1}</p>
                    <p>{this.props.userProfile.user_address2}</p>
                    <p>{this.props.userProfile.user_address3}</p>
                    <p>{this.props.userProfile.user_post_code}</p>
                    <div className="checkboxCon" onClick={() => this.setState({ sameDeliveryAddress: !this.state.sameDeliveryAddress })}>
                        <div className="checkbox">
                            {this.state.sameDeliveryAddress && <div className="tick">&#10003;</div>}
                        </div><p style={{ margin: 0 }}>Use billing address</p>
                    </div>
                    <h4>Delivery Address</h4>
                    {this.state.sameDeliveryAddress
                        ? <div>
                            <p>{this.props.userProfile.user_address1}</p>
                            <p>{this.props.userProfile.user_address2}</p>
                            <p>{this.props.userProfile.user_address3}</p>
                            <p>{this.props.userProfile.user_post_code}</p>
                        </div>
                        : <div>
                            <div className="inputContainer">
                                <label htmlFor="Lastname">Address Line 1</label>
                                <input
                                    className="text-input inputAdj"
                                    type="text"
                                    onChange={(e) => this.props.setDeliveryAddress(e, 'address1')}
                                    value={this.props.deliveryAddress.address1} />
                            </div>
                            <div className="inputContainer">
                                <label htmlFor="Lastname">Address Line 2</label>
                                <input
                                    className="text-input inputAdj"
                                    type="text"
                                    onChange={(e) => this.props.setDeliveryAddress(e, 'address2')}
                                    value={this.props.deliveryAddress.address2} />
                            </div>
                            <div className="inputContainer">
                                <label htmlFor="Lastname">Address Line 3</label>
                                <input
                                    className="text-input inputAdj"
                                    type="text"
                                    onChange={(e) => this.props.setDeliveryAddress(e, 'address3')}
                                    value={this.props.deliveryAddress.address3} />
                            </div>
                            <div className="inputContainer">
                                <label htmlFor="Lastname">Postcode</label>
                                <input
                                    className="text-input inputAdj"
                                    type="text"
                                    onChange={(e) => this.props.setDeliveryAddress(e, 'post_code')}
                                    value={this.props.deliveryAddress.post_code} />
                            </div>
                        </div>}
                        <button className="yellowBtn" onClick={() => this.props.changeIndex(2)}>Confirm and proceed to payment</button>
                </div>
            </div>
        )
    }

    handleCheckBox() {
        this.setState({ sameDeliveryAddress: !this.state.sameDeliveryAddress })
    }
}

export default DeliveryAddress;