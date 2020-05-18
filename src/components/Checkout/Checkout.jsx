import React, {Component} from 'react';

import ViewBasket from './Components/ViewBasket';
import DeliveryAddress from './Components/DeliveryAddress';
import Payment from './Components/Payment';
import OrderConfirmation from './Components/OrderConfirmation';

import './Checkout.css';

class Checkout extends Component {
    state = {
        index: 0,
        deliveryAddress: {
            address1: '',
            address2: '',
            address3: '',
            post_code: '',
        }
    }

    render() {
        return (
            <div className="checkoutContainer">
            
                <div className="boxShadow checkoutDim">


                    <div className="checkoutView">
                        {this.state.index === 0 && <ViewBasket
                                                    basket={this.props.basket}
                                                    addRemoveFromBasket={this.props.addRemoveFromBasket.bind(this)}
                                                    deleteFromBasket={this.props.deleteFromBasket.bind(this)}
                                                    screenWidth={this.props.screenWidth}
                                                    changeIndex={this.changeIndex.bind(this)}></ViewBasket>}

                        {this.state.index === 1 && <DeliveryAddress
                                                    userProfile={this.props.userProfile}
                                                    setDeliveryAddress={this.setDeliveryAddress.bind(this)}
                                                    deliveryAddress={this.state.deliveryAddress}
                                                    changeIndex={this.changeIndex.bind(this)}></DeliveryAddress>}
                        
                        {this.state.index === 2 && <Payment
                                                    userProfile={this.props.userProfile}
                                                    deliveryAddress={this.state.deliveryAddress}
                                                    basket={this.props.basket}
                                                    changeIndex={this.changeIndex.bind(this)}
                                                    ></Payment>}

                        {this.state.index === 3 && <OrderConfirmation></OrderConfirmation>}
                    </div>


                </div>
                
            </div>
        )
    }

    changeIndex(index) {
        this.setState({index});
    }

    setDeliveryAddress(e, input) {
        const deliveryAddress = this.state.deliveryAddress;
        deliveryAddress[input] = e.target.value;
        this.setState({deliveryAddress}, () => console.log(this.state.deliveryAddress, 'STATE<<<<<<<<<<<<<<<<<<<<<<<<<'))
    }
}

export default Checkout;