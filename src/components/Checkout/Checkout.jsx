import React, {Component} from 'react';

import ViewBasket from './Components/ViewBasket';

import './Checkout.css';
import View from '../View/View';

class Checkout extends Component {
    state = {

    }

    render() {

        console.log(this.props, '<<<####props')
        return (
            <div className="checkoutContainer">
            
                <div className="boxShadow checkoutDim">


                    <div className="checkoutView">
                        <ViewBasket
                            basket={this.props.basket}
                            addRemoveFromBasket={this.props.addRemoveFromBasket.bind(this)}
                            deleteFromBasket={this.props.deleteFromBasket.bind(this)}
                            screenWidth={this.props.screenWidth}></ViewBasket>
                    
                    </div>


                </div>
                
            </div>
        )
    }
}

export default Checkout;