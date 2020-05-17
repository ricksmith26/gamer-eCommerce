import React, { Component } from 'react';
import { Link }from 'react-router-dom';

import cartIcon from '../../shared/add-to-cart.svg';
import closeIcon from '../../shared/close.svg';

import './Basket.css';

class Basket extends Component {
    constructor(props) {
        super(props);
      
    this.state = {
        open: false,
        basketEmpty: false
    }
    }
    componentDidUpdate(prevProps) {
        if (Object.values(this.props.basket).length === 0 && this.state.open) {
            this.setState({open: false})
        }
    }


    render() {
        return (
            <div className={Object.values(this.props.basket).length === 0 ? `cartContainer` : `cartContainer cartOpen`}>
            <div
                className={Object.values(this.props.basket).length === 0 ? 'basketContainer' : 'fullBasketContainer'}
                onClick={() => this.setState({ open: !this.state.open })}>

                <div className={!this.state.open ? "rotator" : "rotator2"}>
                    <img className="info" src={cartIcon} alt="cart"/>
                    {Object.values(this.props.basket).length !== 0 && !this.state.open && <p className='counter'>{Object.values(this.props.basket).reduce((acc, val) => {
                        acc += val.qty
                        return acc;
                    }, 0)}</p>}
                </div>

                <div className={this.state.open ? "rotator2" : "rotator1"}>
                    <img className="info2" src={closeIcon} alt="close"/>
                </div>
                <div className="outLine"></div>
            </div>
                {/* <div className="checkout">Checkout</div> */}
                <div className={!this.state.open ? 'verticalClosed1' : 'verticalClosed1 verticalOpen1'}></div>
                <div className={!this.state.open ? 'verticalClosed2' : 'verticalClosed2 verticalOpen2'}></div>
                <div className={!this.state.open ? 'verticalClosed3' : 'verticalClosed3 verticalOpen3'}></div>

                <div className={!this.state.open ? 'horizontalClosed1' : 'horizontalClosed1 horizontalOpen1'}></div>
                <div className={!this.state.open ? 'horizontalClosed2' : 'horizontalClosed2 horizontalOpen2'}></div>
                <div className={!this.state.open ? 'horizontalClosed3' : 'horizontalClosed3 horizontalOpen3'}></div>
                <div className={!this.state.open ? `screenClosed ${this.props.screenWidth < 400 && 'mobileScreen'}` :  `screenClosed screenOpen ${this.props.screenWidth < 400 && 'mobileScreen'}`}>
                    <div className={!this.state.open ? `screenTextClosed` :  `screenTextClosed screenTextOpen`}>
                    {Object.values(this.props.basket).map((item) => {
                        return( 
                            <div className="boxShadow smlCard" key={`${item.product_name}`}>
                            <div className="countAndImg">
                                <p className="count">{item.qty} x </p>
                                <img alt={item.product_name} src={JSON.parse(item.product_images)[0]} className="thumbnailImg"/>
                            </div>
                            <div className="productName">{item.product_name}</div>
                            <div className="adjustQty">
                                <div className='basketBtn'
                                    onClick={() => this.props.addRemoveFromBasket('down', item.product_id)}>-</div>
                                <div className='basketBtn'
                                    onClick={() => this.props.addRemoveFromBasket('up', item.product_id)} style={{paddingTop: '1px'}}>+</div>
                            </div>
                            <div className='basketBtn'
                                onClick={() => this.props.deleteFromBasket(item.product_id)}
                                style={{paddingBottom: '1px', backgroundColor: '#f44336'}}>x</div>
                            </div>)
                    })}
                    <Link to="/checkout">
                        <div className="screenCheckoutBtn" onClick={() => this.setState({open: false})}>Checkout</div>
                    </Link>
                    </div>
                </div>
            </div>
        )
    }

}

export default Basket;