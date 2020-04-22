import React, { Component } from 'react';
import InnerAccordian from '../InnerAccordian/InnerAccordian';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import '../../../../shared/shared.css';
import './Accordian.css';

class Accordian extends Component {
    state = {
        open: false
    }

    render() {
        return (
            <div className="sideMenuContainer" >
                <div className="titleArea" onClick={() => this.setState({ open: !this.state.open })}>
                    <div className="accordianTitle">{this.props.item.category_name}</div>
                    <div className={!this.state.open ? 'triangle-bottom' : 'triangle-bottom rotate'}></div>
                </div>
                <div className={`${this.state.open ? 'listMenu expanded' : 'listMenu'}`}>
                    <ReactCSSTransitionGroup transitionName="example">
                        {this.renderMenu()}
                    </ReactCSSTransitionGroup>
                </div>
            </div>
        )
    }
    renderMenu() {
        return this.state.open && this.props.item.subcategories.map((subcategory) => {
            return <div className="positioned"><InnerAccordian subcategory={subcategory}></InnerAccordian></div>
        })
    }
}

export default Accordian;