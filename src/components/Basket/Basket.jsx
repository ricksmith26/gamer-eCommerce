import React, { Component } from 'react';

import cartIcon from '../../shared/add-to-cart.svg';

import './Basket.css';

class Basket extends Component {
    state = {
        basketContents: []
    }

    render() {
        return (
            <div className="basketContainer">
                <img src={cartIcon} className='floatingBtn'/>
            </div>
        )
    }

   
}

export default Basket;