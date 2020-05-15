import React, { Component } from 'react';
import './MenuItem.css';
import '../../../shared/shared.css';
import { Link } from 'react-router-dom';

class PopUpItems extends Component {

    render() {

        return (

            <div className='popUp cardBorder' style={this.handleGetMargin(this.props.index)}>
                {this.props.subcategory && this.props.subcategory.map((subcategory, i) => {
                        return (
                            <div key={subcategory.subcategory_name + i}>
                                <Link
                                    to={subcategory.subcategory_link ? `/products/subcategory/${subcategory.subcategory_link}+${subcategory.subcategory_id}` : '/'}
                                    style={{ textDecoration: 'none', color: '#343409' }}>

                                    <div className='subcategoryTitle' onClick={() => this.props.handleClose()}>{subcategory.subcategory_name}</div>

                                </Link>

                                <div> {subcategory.searchTerms.map((searchTerm, i) => {

                                    return <Link
                                            to={searchTerm.search_term_link ? `/products/searchTerm/${searchTerm.search_term_link}+${searchTerm.search_term_id}` : '/'}
                                            style={{ textDecoration: 'none', color: '#343409' }}
                                            key={searchTerm.search_term + i}>

                                        <div className="term" onClick={() => this.props.handleClose()}>{searchTerm.search_term}</div>

                                    </Link>

                                })}</div>

                            </div>
                        )
                })}
            </div>
        )
    }

    handleGetMargin(index) {
        return {
            marginLeft: `${index * 20}px`,
        }
    }
}

export default PopUpItems;