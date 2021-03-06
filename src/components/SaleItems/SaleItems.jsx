import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import leftArrow from '../../shared/left-arrow.svg';
import rightArrow from '../../shared/right-arrow.svg';

import './SaleItems.css';

const arr = [0,1,2, 3 ,4]

class SaleItems extends Component {
    is_mounted = false;

    state = {
        indexMap: arr,
        direction: '',
        products: []
    }

    async componentDidMount() {
        this.is_mounted = true;
        if (this.is_mounted) {

            document.getElementById(this.props.title).addEventListener('touchstart', function(evt) {
                this.xDown = evt.touches[0].clientX;
                this.yDown = evt.touches[0].clientY;
            }.bind(this),  {passive: true});
            this.run();
    
            const indexMap = this.props.products.map((item, i) =>  i);
    
            this.setState({indexMap})
        }
    }

    async componentWillUnmount() {
        this.is_mounted = false;
        window.removeEventListener("touchstart", () => {});
    }
    
    render() {

        return (
            
            <div className="outerBorder">
                <div className="centerBorder">
                    <div className="innerBorder" id={this.props.title}>
                        <div className="titleContainer">
                            <div className="saleTitle">{this.props.title}</div>
                        </div>
                         <div className="saleItemsContainer">
                            <div className="rightDirection" onClick={() => this.change('left')}>
                                <img src={rightArrow} alt="<" className="rightArrow"/>
                            </div>
                            <div className="leftDirection" onClick={() => this.change('right')}>
                                <img src={leftArrow} alt="<" className="leftArrow"/>
                            </div>
                                
                            {this.props.products.map((item, i) => {
                                return (
                                    <Link
                                        to={{ pathname: `/fullView/${item.product_id}`, state: { screenWidth: this.props.screenWidth, ...item } }}
                                        key={item.product_name + item.product_id}>
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

    handleTouchMove(evt) {
        if ( ! this.xDown || ! this.yDown ) {
            return;
        }

        var xUp = evt.touches[0].clientX;
        var yUp = evt.touches[0].clientY;

        this.xDiff = this.xDown - xUp;
        this.yDiff = this.yDown - yUp;

        if ( Math.abs( this.xDiff ) > Math.abs( this.yDiff ) ) { // Most significant.
            if ( this.xDiff > 0 ) {
                this.onLeft();
            } else {
                this.onRight();
            }
        }

        this.xDown = null;
        this.yDown = null;
    }

    onLeft() {
        this.change('left')
        this.run();
    }

    onRight() {
        this.change('right')
        this.run();
    }

    run() {
        document.getElementById(this.props.title).addEventListener('touchmove', function(evt) {
            this.handleTouchMove(evt);
        }.bind(this), {passive: true});
    }
}

export default SaleItems;