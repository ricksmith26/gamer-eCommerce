import React, { Component, PropTypes } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './InnerAccordian.css';
import '../../../../shared/shared.css';
import { Link } from 'react-router-dom';
// const ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

class InnerAccordian extends Component {
    state = {
        open: false
    }

    render() {
        console.log(this.props.subcategory)
        return (
            <div className={`sideInnerMenuContainer ${this.state.open && 'expanded'}`}>
                <div className="innerList" onClick={() => this.setState({open: !this.state.open})}>
                    <div className="innerAccordianTitle">{this.props.subcategory.subcategory_name}</div>
                    <div className={!this.state.open ? 'triangle-bottom' : 'triangle-bottom rotate'}></div>
                </div>
                
                <div className={`animContainer ${this.state.open && 'expanded'}`}>

					<ReactCSSTransitionGroup transitionName="example">
						{this.renderList()}
					</ReactCSSTransitionGroup>
				</div>
            </div>
        )
    }

    renderList() {
        return this.state.open && <div>{this.props.subcategory.searchTerms.map((term) => {
            return <Link to={term.search_term_link ? `/games/${term.search_term_link}+${term.search_term_id}` : '/'} style={{ textDecoration: 'none' }} onClick={() => this.props.handleClose()}><div className="searchTerm  subcategoryTitle">{term.search_term}</div></Link>
        })}</div>
    }
}

export default InnerAccordian;