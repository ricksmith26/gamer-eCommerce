import React, { Component } from 'react';
import './App.css';
import './shared/shared.css';
import NavigationMenu from './components/NavigationMenu/NavigationMenu'
import Userbar from './components/Userbar/Userbar';
import AdvertSlider from './components/AdvertSlider/AdvertSlider';
import DisplayGrid from './components/DisplayGrid/DisplayGrid';
import MobileNavigationMenu from './components/MobileNavigationMenu/MobileNavigationMenu';

import { Route } from 'react-router-dom';
import FullView from './components/Fullview/Fullview';
import View from './components/View/View';
import Basket from './components/Basket/Basket';

class App extends Component {

	state = {
		basket: []
	}

	constructor() {
		super();
		this.state = { screenWidth: null };
		this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
	}

	componentDidMount() {
		this.updateWindowDimensions()
		window.addEventListener("resize", () => this.updateWindowDimensions());
	}

	componentWillUnmount() {
		window.removeEventListener("resize", this.updateWindowDimensions)
	}

	render() {

		return (
			<div>
				
				{this.state.screenWidth > 750 ? <div><Userbar></Userbar>
					<div className='yellowBackground'>
						<div className="centeredRowFlex">
							<NavigationMenu></NavigationMenu>
						</div>
					</div></div> : <MobileNavigationMenu></MobileNavigationMenu>}
				<div>
					<Route exact path="/"
						component={() => <AdvertSlider screenWidth={this.state.screenWidth}></AdvertSlider>} />
					<Route path="/products/subcategory/:subcategory"
						render={routeProps => <View basket={this.state.basket} addToBasket={this.addToBasket} screenWidth={this.state.screenWidth} {...routeProps}/>}/>
					<Route path="/products/searchTerm/:subcategory/:term"
						render={routeProps => <View basket={this.state.basket} addToBasket={this.addToBasket} screenWidth={this.state.screenWidth} {...routeProps}/>}/>
					<Route path="/fullView/:id"
						render={routeProps => <FullView  basket={this.state.basket} addToBasket={this.addToBasket} screenWidth={this.state.screenWidth} {...routeProps}/>}/>
				</div>
				<Basket basket={this.state.basket} addToBasket={this.addToBasket}></Basket>
			</div>
		);
	}
	updateWindowDimensions() {
		this.setState({ screenWidth: window.innerWidth });
	}

	addToBasket(item) {
		this.setState({basket: [...this.state.basket, item]})
	}
}

export default App;
