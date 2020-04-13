import React, { Component } from 'react';
import './MenuItem.css';
import '../../../shared/shared.css'

class PopUpItems extends Component {

    render() {

        return (

            <div class='popUp' style={this.handleGetMargin(this.props.index)}>
                {this.props.subcategory.map((subcategory) => {

                    return (
                            <div className="cardBorder">
                                <div className='subcategoryTitle'>{subcategory.subcategory}</div>
                                <div> {subcategory.searchTerms.map((searchTerm) => {
                                    return <div className="term">{searchTerm.term}</div>
                                })}</div>
                            </div>

                    )
                })}
            </div>
        )
    }

    handleGetMargin(index) {
        return {
            'margin-left': `${index * 44}px`,
        }
    }
}

export default PopUpItems;