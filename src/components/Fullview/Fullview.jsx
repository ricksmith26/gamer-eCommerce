import React, { Component } from 'react';

import './Fullview.css';
import '../../shared/shared.css';
import SaleItems from '../SaleItems/SaleItems';
import * as productsApi from '../../routes/productRoutes';

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
            search_term_id: 0,
            ready: false,
            products:[]
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
                product_release_date: this.props.location.state.product_release_date,
                product_price: this.props.location.state.product_price,
                search_term_id: this.props.location.state.search_term_id
            }, () => this.getMoreLikeThis());
        } else {
            const product = await productsApi.getProductById(Number(this.props.match.params.id));
            this.setState({
                product_id: this.props.location.state.product_id,
                product_name: product.product_name,
                product_description: product.product_description,
                product_images: product.product_images,
                product_more_details: product.product_more_details,
                product_release_date: product.product_release_date,
                product_price: product.product_price,
                search_term_id: product.search_term_id
            }, () => this.getMoreLikeThis())
        }
        this.updateWindowDimensions()
        window.addEventListener("resize", () => this.updateWindowDimensions());
    }

    async componentDidUpdate(prevProps) {
        if (this.props.location.pathname !== prevProps.location.pathname) {
            const product = this.props.location.state;
            this.setState({
                product_id: product.product_id,
                product_name: product.product_name,
                product_description: product.product_description,
                product_images: product.product_images,
                product_more_details: product.product_more_details,
                product_release_date: product.product_release_date,
                product_price: product.product_price,
                search_term_id: product.search_term_id
            }, () => this.getMoreLikeThis())

        }
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateWindowDimensions)
    }


    render() {
        return (
            <div>
            <div className="fullView">
            <div className='centeredRowFlex'>
                <div className={this.state.screenWidth < 750 ? 'mobileFullView' : 'cardContainer'}>
                    <div className='boxShadow'>
                        <div className="fullViewTitle">
                            {this.state.product_name}
                        </div>
                        <div className="spaceBetweenFlex cardOverflow">
                            <img className="fullViewImage" src={this.props.location.state.product_images} alt={`${this.state.product_name}`} />
                            <div className={this.state.screenWidth < 1220 ? 'smallWidthView'  : 'hidden' } >
                            {this.state.screenWidth > 444
                            ? <div className={'cardBorder centeredColumnFlex buy'}>
                                    <div className="buyNow">
                                        Buy now
                                    </div>
                                    <div className="buyText"
                                        onClick={() => { this.addToBasket() }}>
                                    <img src={cartIcon} className='cartIcon' alt='cart'/> £{this.props.location.state.product_price}
                                    </div>
                                </div>
                                :  <div className="buyText mobileBuy"
                                        onClick={() => { this.addToBasket() }}>
                                    <img src={cartIcon} className='cartIcon' alt='cart'/> £{this.props.location.state.product_price}
                                    </div>
                                    }
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
                                        onClick={() => { this.addToBasket() }}>
                                        <img src={cartIcon} className='cartIcon' alt="cart"/> £{this.props.location.state.product_price}
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
                {this.state.products.length === 5
                    &&  <div className="centerMore">
                            <div className={this.state.screenWidth > 800 ? "moreContainer" : "moreMobileContainer"}>
                                <SaleItems
                                    title="More Like This"
                                    products={this.state.products}></SaleItems>
                            </div>
                        </div>
                        }
            </div>
            </div>
        )
    }

    updateWindowDimensions() {
        this.setState({ screenWidth: window.innerWidth });
    }

    async getMoreLikeThis() {
        const products = await productsApi.getMoreLikeThis(this.state.search_term_id);
        this.setState({products})
    }

    addToBasket() {
        this.props.addToBasket({
            product_id: this.state.product_id,
            product_name: this.state.product_name,
            product_images: this.state.product_images,
            product_price: this.state.product_price
        })
    }
}

export default FullView;