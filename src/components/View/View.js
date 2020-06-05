import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import './View.css';

import DisplayGrid from '../DisplayGrid/DisplayGrid';

class View extends Component {

    state = {

    }
   

    render() {
        return (
            <div className="view">
                <Route
                    exact path="/products/subcategory/:subcategory"
                    render={routeProps => <DisplayGrid
                                            params={this.props.match.params}
                                            screenWidth={this.props.screenWidth}
                                            addToBasket={this.props.addToBasket.bind(this)}
                                            {...routeProps}/>}/>
                <Route
                    exact path="/products/searchTerm/:subcategory/:term"
                    render={routeProps => <DisplayGrid
                                            params={this.props.match.params}
                                            screenWidth={this.props.screenWidth}
                                            addToBasket={this.props.addToBasket.bind(this)}
                                            {...routeProps}/>}/>

                <Route
                    exact path="/search/:searchRequest"
                    render={routeProps => <DisplayGrid
                                            params={this.props.match.params}
                                            screenWidth={this.props.screenWidth}
                                            addToBasket={this.props.addToBasket.bind(this)}
                                            {...routeProps}/>}/>
            </div>
        )
    }
}

export default View;