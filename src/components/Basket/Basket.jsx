import React, { Component } from 'react';

import cartIcon from '../../shared/add-to-cart.svg';
import closeIcon from '../../shared/close.svg';

import './Basket.css';

class Basket extends Component {

    state = {
        open: false
    }

    render() {
        return (
            <div className={this.props.basket.length === 0 ? "cartContainer" : "cartContainer cartOpen"}>
            <div
                className={this.props.basket.length === 0 ? 'basketContainer' : 'fullBasketContainer'}
                onClick={() => this.setState({ open: !this.state.open })}>

                <div className={!this.state.open && "rotator"}>
                    <img class="info" src={cartIcon} />
                    {this.props.basket.length !== 0 && !this.state.open && <p className='counter'>{this.props.basket.length}</p>}
                </div>

                <div className={this.state.open && "rotator2"}>
                    <img class="info2" src={closeIcon} />
                </div>
                <div class="outLine"></div>
            </div>
                <div className={!this.state.open ? 'verticalClosed1' : 'verticalClosed1 verticalOpen1'}></div>
                <div className={!this.state.open ? 'verticalClosed2' : 'verticalClosed2 verticalOpen2'}></div>
                <div className={!this.state.open ? 'verticalClosed3' : 'verticalClosed3 verticalOpen3'}></div>

                <div className={!this.state.open ? 'horizontalClosed1' : 'horizontalClosed1 horizontalOpen1'}></div>
                <div className={!this.state.open ? 'horizontalClosed2' : 'horizontalClosed2 horizontalOpen2'}></div>
                <div className={!this.state.open ? 'horizontalClosed3' : 'horizontalClosed3 horizontalOpen3'}></div>
            </div>
        )
    }


}

export default Basket;