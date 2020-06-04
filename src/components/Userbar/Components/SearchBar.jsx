import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { debounce } from "lodash";

import * as productApi from '../../../routes/productRoutes';

class SearchBar extends Component {

    constructor() {
        super()

        this.state = {
            value: '',
            searchItems: []
        }

        this.changeSearch = debounce(this.getSearch, 325)
    }

    render() {
        return (
            <div style={{ position: 'relative' }}>
                <input id="search" className="text-input" type="text" placeholder="Search.." onChange={(event) => this.handleChange(event)} />

                {this.state.searchItems.length
                    ? <div className="cardBorder searchResults">{this.state.searchItems.map((item, i) => {
                        return (
                            <Link to={{ pathname: `/fullView/${item.product_id}`,
                                        state: { screenWidth: this.props.screenWidth, ...item } }}
                                    key={item.product_name + item.product_id}
                                    style={{ color: 'inherit', textDecoration: 'none'}}>

                                <div className="searchResultBox" onClick={() => this.setState({searchItems: []})}>
                                    <div className="thumbnailBox">
                                        <img src={item.product_images} style={{ height: '64px', maxWidth: '64px' }} alt={`${item}-${i}`} />
                                    </div>
                                    <div className="searchResultTextBox">
                                        {item.product_name}
                                    </div>
                                </div>

                            </Link>
                        )
                    })}</div>
                    : null}
            </div>
        )
    }
    
    async getSearch(event) {
        if (!event.length) {
            return this.setState({ searchItems: [] })
        }
        const searchItems = await productApi.getSearch(event);
        this.setState({ searchItems })
    }

    handleChange = (e) => {
        const val = e.target.value
        this.setState({ value: val }, () => {
            this.changeSearch(val)
        })
    }


}

export default SearchBar;