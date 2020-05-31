import React, { Component } from 'react';
import { Link }from 'react-router-dom';

import cartIcon from '../../shared/add-to-cart.svg';
import closeIcon from '../../shared/close.svg';
import plusIcon from '../../shared/plus.svg';
import minusIcon from '../../shared/minus.svg';
import checkoutIcon from '../../shared/checkoutDark.svg';

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
                <div className={!this.state.open ? 'verticalClosed1' : 'verticalClosed1 verticalOpen1'}></div>
                <div className={!this.state.open ? 'verticalClosed2' : 'verticalClosed2 verticalOpen2'}></div>
                <div className={!this.state.open ? 'verticalClosed3' : 'verticalClosed3 verticalOpen3'}></div>

                <div className={!this.state.open ? 'horizontalClosed1' : 'horizontalClosed1 horizontalOpen1'}></div>
                <div className={!this.state.open ? 'horizontalClosed2' : 'horizontalClosed2 horizontalOpen2'}></div>
                <div className={!this.state.open ? 'horizontalClosed3' : 'horizontalClosed3 horizontalOpen3'}></div>
                <div className={!this.state.open ? `screenClosed ${this.props.screenWidth < 400 && 'mobileScreen'}` :  `screenClosed screenOpen ${this.props.screenWidth < 400 && 'mobileScreen'}`}>
                    <div className={!this.state.open ? `screenTextClosed` :  `screenTextClosed`}>
                        <div style={{overflow: 'auto'}}>
                            <div style={{height: '208px', width: '100%'}}>
                            {Object.values(this.props.basket).map((item) => {
                                return( 
                                    <div className="boxShadow smlCard" key={`${item.product_name}`}>
                                    <div className="countAndImg">
                                        <p className="count">{item.qty} x </p>
                                        <div className="basketThumbnailBox">
                                            <img alt={item.product_name} src={item.product_images} className="thumbnailImg"/>
                                        </div>
                                    </div>
                                    <div className="productName">
                                        <div>£{item.product_price}</div>
                                        <div>{item.product_name}</div>
                                    </div>
                                    <div className="basketBtns">
                                    <div className="adjustQty">
                                        <div className='basketBtnMinus yellowBtn'
                                            onClick={() => this.props.addRemoveFromBasket('down', item.product_id)}>
                                            <img src={minusIcon} alt="" style={{height: '10px', width: '10px'}}/>
                                        </div>
                                        <div className='basketBtnPlus yellowBtn'
                                            onClick={() => this.props.addRemoveFromBasket('up', item.product_id)} style={{paddingTop: '1px'}}>
                                            <img src={plusIcon} alt=""  style={{height: '10px', width: '10px'}}/>
                                        </div>
                                    </div>
                                        <div className='basketBtnDel'
                                            onClick={() => this.props.deleteFromBasket(item.product_id)}
                                            style={{paddingBottom: '1px', backgroundColor: '#f44336'}}>
                                            <img src={closeIcon} alt='deleteAll' style={{height: '10px', width: '10px'}}/>
                                            <div className="deleteText">Delete</div>
                                        </div>

                                    </div>
                                    </div>)
                            })}
                            </div>
                        </div>
                        <div className="screenFooter">
                            <Link to={'/checkout'}>
                                <div className="yellowBtn checkoutBtn" onClick={() => this.setState({open: false})}>
                                    <img src={checkoutIcon} style={{height: '10px', width: '10px', marginRight: '8px'}} alt="checkoutIcon"/>
                                    Checkout
                                </div>
                            </Link>
                            <div style={{marginRight: '12px'}}>Total: £{this.getTotal().toFixed(2)}</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    getTotal() {
        return Object.values(this.props.basket).reduce((acc, item) => {
            acc += (Number(item.qty) * Number(item.product_price));
            return acc;
        }, 0)
    }
}

export default Basket;