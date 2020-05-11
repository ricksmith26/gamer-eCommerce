import React, { Component } from 'react';

import './Fullview.css';
import '../../shared/shared.css';

import SelectedContext from '../DisplayGrid/DisplayGrid';
import * as gameApi from '../../routes/gamesRoutes';

import cartIcon from '../../shared/add-to-cart.svg';

class FullView extends Component {

    constructor() {
        super();
        this.state = {
            screenWidth: null,
            imageIndex: 0,
            product_id: 0,
            product_description: '',
            product_images: '',
            product_more_details: '',
            product_release_date: '',
            ready: false
        };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    async componentDidMount() {
        if (this.props.location.state) {
            this.setState({
                product_id: this.props.location.state.product_id,
                product_name: this.props.location.state.product_name,
                product_description: this.props.location.state.product_description,
                product_images: this.props.location.state.product_images,
                product_more_details: this.props.location.state.product_more_details,
                product_release_date: this.props.location.state.product_release_date
            });
        } else {
            const product = await gameApi.getProductById(Number(this.props.match.params.id));
            this.setState({
                product_id: this.props.location.state.product_id,
                product_name: product.product_name,
                product_description: product.product_description,
                product_images: product.product_images,
                product_more_details: product.product_more_details,
                product_release_date: product.product_release_date
            })
        }
        this.updateWindowDimensions()
        window.addEventListener("resize", () => this.updateWindowDimensions());
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateWindowDimensions)
    }


    render() {
        // console.log(this.props, '<<<<<<<BASKET')
        return (
            <div>
            <div className='centeredRowFlex'>
                <div className={this.state.screenWidth < 750 ? 'mobileFullView' : 'cardContainer'}>
                    <div className='boxShadow'>
                        <div className="fullViewTitle">
                            {this.state.product_name}
                        </div>
                        <div className="spaceBetweenFlex">
                            <img className="fullViewImage" src={JSON.parse(this.props.location.state.product_images)[this.state.imageIndex]} alt='na' />
                            <div className={this.state.screenWidth < 1220 ? 'smallWidthView'  : 'hidden' } >
                            <div className='cardBorder centeredColumnFlex buy'>
                                    <div className="buyNow">
                                        Buy now
                                    </div>
                                    <div className="buyText"
                                        onClick={() => {
                                            this.props.addToBasket({
                                                product_id: this.state.product_id,
                                                product_name: this.state.product_name,
                                                product_description: this.state.product_description,
                                                product_images: this.state.product_images,
                                                product_more_details: this.state.product_more_details,
                                                product_release_date: this.state.product_release_date
                                            })
                                        }}>
                                    <img src={cartIcon} className='cartIcon'/> £{this.props.location.state.product_price}
                                    </div>
                                </div>
                            </div>
                            <div className={this.state.screenWidth < 1220 ? 'fullViewMobileText' : 'hidden'}>
                                {this.state.product_description}
                            </div>
                            <div className={this.state.screenWidth > 1220 ? 'buyContainer' : 'hidden'}>
                                <div className={this.state.screenWidth > 1220 ? 'fullViewText' : 'fullViewMobileText'}>
                                    {this.state.product_description}
                                </div>
                                <div className={this.state.screenWidth > 1220 ? 'cardBorder centeredColumnFlex buy'  : 'hidden' }>
                                    <div className="buyNow">
                                        Buy now
                                    </div>
                                    <div className="buyText"
                                        onClick={() => {
                                            this.props.addToBasket({
                                                product_id: this.state.product_id,
                                                product_name: this.state.product_name,
                                                product_description: this.state.product_description,
                                                product_images: this.state.product_images,
                                                product_more_details: this.state.product_more_details,
                                                product_release_date: this.state.product_release_date
                                            })
                                        }}>
                                    <img src={cartIcon} className='cartIcon'/> £{this.props.location.state.product_price}
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="fullViewReleaseDate">
                                    Release Date: {this.state.product_release_date}
                                </div>
                                <div className="fullViewMoreDetailsText">
                                    {this.state.product_more_details}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>

        )
    }

    updateWindowDimensions() {
        this.setState({ screenWidth: window.innerWidth });
    }
}

export default FullView;