import React, { Component, PropTypes } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './InnerAccordian.css';
import '../../../../shared/shared.css';
// const ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

class InnerAccordian extends Component {
    state = {
        open: false
    }

    render() {
        console.log(this.props.subcategory)
        return (
            <div className="sideInnerMenuContainer">
                <div className="innerList" onClick={() => this.setState({open: !this.state.open})}>
                    <div className="accordianTitle">{this.props.subcategory.subcategory_name}</div>
                    <div className={!this.state.open ? 'triangle-bottom' : 'triangle-bottom rotate'}></div>
                </div>
                
                <div className="animContainer">

					<ReactCSSTransitionGroup transitionName="example">
						{this.renderList()}
					</ReactCSSTransitionGroup>
				</div>
            </div>
        )
    }

    renderList() {
        return this.state.open && <div>{this.props.subcategory.searchTerms.map((term) => {
            return <div className="searchTerm">{term.search_term}</div>
        })}</div>
    }
}

export default InnerAccordian;