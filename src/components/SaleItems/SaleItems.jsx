import React, { Component } from 'react';

import Carousel from './Components/Carousel';

import './SaleItems.css';

const arr = [0,1,2, 3 ,4]

class SaleItems extends Component {

    state = {
        products: arr,
        direction: '',
        index: 1
    }
    
    render() {

        return (
            <div className="outerBorder">
                <div className="centerBorder">
                    <div className="innerBorder">
                        <div className="saleTitle">{this.props.title}</div>
                         <div className="saleItemsContainer">
                            <div className="rightDirection" onClick={() => this.change('right')}></div>
                            <div className="leftDirection" onClick={() => this.change('left')}></div>
                            {this.state.products.map((item, i) => {
                                console.log(this.state.products.indexOf(i),'this.state.products.indexOf(i)', i, this.state.products)
                                return (
                                    <div className={`saleItem${this.state.products.indexOf(i)}`}>
                                        <div className="saleProductBox boxShadow">
                                            <img className="gameImage" src={'sdasad'} alt='dasas' />
                                            <div className="title darkText">Name{i +1}</div>
                                            <div className="greyLine linePosition"></div>
                                            <div className="priceBanner lightText">£10.96</div>
                                        </div>
                                    </div>

                                )
                            })}
                        </div> 
                    </div>
                </div>
                <button onClick={() => this.change('up') }>press</button>
            </div>
        )
    }


    change(direction) {
        console.log(direction)
        if (direction === 'right') {
            const item = this.state.products[this.state.products.length - 1];
            const products = this.state.products.slice(0, this.state.products.length - 1);
            this.setState({products: [item, ...products]}, () => console.log(this.state.products))
        }
        if (direction === 'left') {
            const item = this.state.products[0];
            const products = this.state.products.slice(1, this.state.products.length);
            this.setState({products: [...products, item]}, () => console.log(this.state.products))
        }

    }

}

export default SaleItems;