import React, { Component } from 'react';
import '../../shared/shared.css';
import './DisplayGrid.css';

import * as gameApi from '../../routes/gamesRoutes';
import { Link } from 'react-router-dom';

class DisplayGrid extends Component {


    state = {
        collection: [],
        term: '',
        selected: {
            SKU: '',
            bundle_ids: '',
            category_id: 0,
            product_description: '',
            product_genre: '',
            product_id: 0,
            product_images: '',
            product_more_details: '',
            product_name: '',
            product_pegi: 0,
            product_price: '',
            product_release_date: '',
            search_term_id: 0,
            subcategory_id: 0,
        }
    }

    async componentDidMount() {
        this.getGames()
    }

    async componentDidUpdate(prevProps) {
        if (this.props.location.pathname !== prevProps.location.pathname && this.props.location.pathname.includes('products')) {
            console.log('>>>>>>>',this.props.location.pathname, prevProps.location.pathname, '<<<<<<<<<')
            this.getGames();

        }
    }

    async componentWillUnmount() {
        this.getGames()
    }



    render() {

        return (
            <div className="gridContainer">
                {this.state.collection && this.state.collection.length > 0 && this.state.collection.map((item, i) => {
                    return (
                        <Link to={{ pathname: `/fullView/${item.product_id}`, state: { screenWidth: this.props.screenWidth, ...item } }} key={item.product_name}>
                            <div className="productBox boxShadow">
                                <img className="gameImage" src={JSON.parse(item.product_images)[0]} alt={item.product_name} />
                                <div className="title darkText">{item.product_name}</div>
                                {/* <img className="brandIcon iconPosition" src={this.handleIconSelection()} /> */}
                                <div className="greyLine linePosition"></div>
                                <div className="priceBanner lightText">£{item.product_price}</div>
                                <div className="mask mask-1"></div>
                                <div className="mask mask-2"></div>
                                <div className="content2">
                                    <h4 className="lightText popUpTitle">{item.product_name}</h4>
                                </div>
                                <div className="content">
                                    <p className="lightText description">{item.product_description}</p>
                                </div>
                            </div>
                        </Link>
                    )
                })}
            </div>
        )
    }


    async getProductsByTerm() {
        try {
            const term = Number(this.props.match.params.term.split('+')[1]);
            this.setState({ term });
            const collection = await gameApi.getProductsByTerm(term);
            this.setState({ collection });

        }

        catch {
            this.setState({ collection: [] })
        }
    }
    async getProductsBySubcategory() {
        try {
            const subcategory = Number(this.props.match.params.subcategory.split('+')[1]);
            this.setState({ subcategory });
            const collection = await gameApi.getProductsBySubcategory(subcategory);
            this.setState({ collection });

        }

        catch {
            this.setState({ collection: [] })
        }
    }

    async getGames() {
        console.log(this.props.match.params, 'this.props.match.paramsthis.props.match.paramsthis.props.match.paramsthis.props.match.params', this.props.match.params.subcategory.split('+')[1] )
        if (this.props.match.params.subcategory.split('+')[1]) {
            console.log('sub>>>>>>>>>>', this.props.match.params.subcategory)
            return this.getProductsBySubcategory();
        }
        if (this.props.match.params.term.split('+')[1]) {
            console.log('term>>>>>>>>>>', this.props.match.params.term)
            return this.getProductsByTerm();
        }
    }
}

export default DisplayGrid;