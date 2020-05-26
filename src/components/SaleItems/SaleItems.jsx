import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import leftArrow from '../../shared/left-arrow.svg';
import rightArrow from '../../shared/right-arrow.svg';

import './SaleItems.css';

const arr = [0,1,2, 3 ,4]

class SaleItems extends Component {

    state = {
        indexMap: arr,
        direction: '',
        products: []
    }

    async componentWillReceiveProps() {

        const indexMap = this.props.products.map((item, i) =>  i);

        this.setState({indexMap})

    }
    
    render() {

        return (
            <div className="outerBorder">
                <div className="centerBorder">
                    <div className="innerBorder">
                        <div className="saleTitle">{this.props.title}</div>
                         <div className="saleItemsContainer">
                            <div className="rightDirection" onClick={() => this.change('right')}>
                                <img src={rightArrow} alt="<" className="rightArrow"/>
                            </div>
                            <div className="leftDirection" onClick={() => this.change('left')}>
                                <img src={leftArrow} alt="<" className="leftArrow"/>
                            </div>
                            {this.props.products.map((item, i) => {
                                return (
                                    <Link to={{ pathname: `/fullView/${item.product_id}`, state: { screenWidth: this.props.screenWidth, ...item } }} key={item.product_name}>
                                        <div className={`saleItem${this.state.indexMap.indexOf(i)}`}>
                                            <div className="saleProductBox boxShadow">
                                                <img className="gameImage" src={item.product_images} alt='dasas' />
                                                <div className="title darkText">{item.product_name}</div>
                                                <div className="greyLine linePosition"></div>
                                                <div className="priceBanner lightText">£{item.product_price}</div>
                                            </div>
                                        </div>
                                    </Link>

                                )
                            })}
                        </div> 
                    </div>
                </div>
            </div>
        )
    }


    change(direction) {
        if (direction === 'right') {
            const item = this.state.indexMap[this.state.indexMap.length - 1];
            const products = this.state.indexMap.slice(0, this.state.indexMap.length - 1);
            this.setState({indexMap: [item, ...products]})
        }
        if (direction === 'left') {
            const item = this.state.indexMap[0];
            const products = this.state.indexMap.slice(1, this.state.indexMap.length);
            this.setState({indexMap: [...products, item]})
        }

    }

}

export default SaleItems;