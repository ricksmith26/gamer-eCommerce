import React, { Component } from 'react';
import './MenuItem.css';
import '../../../shared/shared.css';
import { Link } from 'react-router-dom';

class PopUpItems extends Component {

    render() {

        return (

            <div className='popUp cardBorder' style={this.handleGetMargin(this.props.index)}>
                {this.props.subcategory.map((subcategory) => {

                    return (
                        <div>
                            <Link to={subcategory.link ? `/${subcategory.link}` : '/'} style={{ textDecoration: 'none', color: '#343409' }}><div className='subcategoryTitle'>{subcategory.subcategory}</div></Link>
                            <div> {subcategory.searchTerms.map((searchTerm, i) => {
                                return <Link to={searchTerm.link ? `/${searchTerm.link}` : '/'} style={{ textDecoration: 'none', color: '#343409' }}><div className="term" key={i}>{searchTerm.term}</div></Link>
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