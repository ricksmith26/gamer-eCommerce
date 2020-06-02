import React, { Component } from 'react';
import '../../shared/shared.css';
import './DisplayGrid.css';
import cartIcon from '../../shared/add-to-cart.svg';
import checkout from '../../shared/checkoutDark.svg';
import * as gameApi from '../../routes/productRoutes';
import { Link } from 'react-router-dom';

class DisplayGrid extends Component {
    is_mounted = false;

    state = {
        collection: [],
        term: '',
        // selected: {
        //     SKU: '',
        //     bundle_ids: '',
        //     category_id: 0,
        //     product_description: '',
        //     product_genre: '',
        //     product_id: 0,
        //     product_images: '',
        //     product_more_details: '',
        //     product_name: '',
        //     product_pegi: 0,
        //     product_price: '',
        //     product_release_date: '',
        //     search_term_id: 0,
        //     subcategory_id: 0,
        // },
        pending: false,
        title: ''
    }

    async componentDidMount() {
        this.getGames()
    }

    async componentDidUpdate(prevProps) {
        this.is_mounted = true;
        if (this.props.location.pathname !== prevProps.location.pathname && this.props.location.pathname.includes('products')) {
            this.setState({pending: true})
            this.getGames();
        }
    }

    async componentWillUnmount() {
        this.is_mounted = false;
    }



    render() {

        return (
            <div className="gridscroll">
                <div className="centerFlex">
                    <h2 className="displayText">{this.state.title}</h2>
                </div>

                <div className={`gridContainer ${this.props.screenWidth < 750 && 'mobileHeight'}`}>
                    {(this.state.collection && this.state.collection.length > 0) && !this.state.pending ? this.state.collection.map((item, i) => {
                        return (
                            
                                <div className="productBox boxShadow" key={item.product_name + item.product_id}>
                                    <img className="gameImage" src={item.product_images} alt={item.product_name + item.product_id} />
                                    <div className="title darkText">{this.getName(item)}</div>
                                    <div className="greyLine linePosition"></div>
                                    <div className="priceBanner lightText">£{item.product_price}</div>
                                    <div className="mask mask-1"></div>
                                    <div className="mask mask-2"></div>
                                    <div className="content2">
                                        <h4 className="lightText popUpTitle">{item.product_name}</h4>
                                    </div>
                                    <div className="content">
                                        <div className="spaceBetweenCenter" style={{marginTop: '16px'}}>
                                            <Link to={{ pathname: `/fullView/${item.product_id}`, state: { screenWidth: this.props.screenWidth, ...item } }}>
                                                <div className="buyTextD">
                                                    View Details
                                                </div>
                                            </Link>
                                            <div className="buyTextD"
                                                onClick={(event) => this.add(event, item)}>
                                                <img src={cartIcon} className='cartIcon' alt='cart' /> £{item.product_price}
                                            </div>
                                            <Link to="/checkout" replace>
                                                <div className="checkout">
                                                    <img src={checkout} className='checkoutIcon' alt="cart"/>Checkout
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            
                        )
                    })
                        : <div className="loaderCon">
                            <div className="centeredColumnFlex">
                                <p>one moment..</p>
                                <div className="loader">
                                </div>
                            </div>
                        </div>}
                </div>
            </div>
        )
    }


    async getProductsByTerm() {
        try {
            const term = Number(this.props.match.params.term.split('+')[1]);
            return Promise.all([
                gameApi.getTitle(1, term),
                gameApi.getProductsByTerm(term)
            ]).then(([title, collection ]) => {
                // if (this.is_mounted) {
                    this.setState({ collection, pending: false, title });
                // }
            })
        }

        catch {
            this.setState({ collection: [], pending: false })
        }
    }
    async getProductsBySubcategory() {
        try {
            const subcategory = Number(this.props.match.params.subcategory.split('+')[1]);
            const collection = await gameApi.getProductsBySubcategory(subcategory);
            const title = await gameApi.getTitle(subcategory);
            // if (this.is_mounted) {
                this.setState({ subcategory, collection, pending: false, title });
            // }
        }

        catch {
            this.setState({ collection: [], pending: false })
        }
    }

    async getGames() {
        if (this.props.match.params.subcategory.split('+')[1]) {
            return this.getProductsBySubcategory();
        }
        if (this.props.match.params.term.split('+')[1]) {
            return this.getProductsByTerm();
        }
    }

    getName(item) {
        return item.product_name.length > 66 ? `${item.product_name.slice(0, 66)}...` : item.product_name;
    }

    add(event, item) {
        event.preventDefault();
        this.props.addToBasket({
            product_id: item.product_id,
            product_name: item.product_name,
            product_description: item.product_description,
            product_images: item.product_images,
            product_more_details: item.product_more_details,
            product_release_date: item.product_release_date,
            product_price: item.product_price
        })
    }

    // reorder(type) {
    //     this.state.collection.sort(() => {
            
    //     })
    // }
}

export default DisplayGrid;