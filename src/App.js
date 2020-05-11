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

	constructor() {
		super();
		this.state = {
			screenWidth: null,
			basket: {}
		};
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
						<div className="centeredRowFlex" 
							// style={{overflow: 'hidden'}}
							>
							<NavigationMenu></NavigationMenu>
						</div>
					</div></div> : <MobileNavigationMenu></MobileNavigationMenu>}
				<div>
					<Route exact path="/"
						component={() => <AdvertSlider screenWidth={this.state.screenWidth}></AdvertSlider>} />
					<Route path="/products/subcategory/:subcategory"
						render={routeProps => <View basket={this.state.basket} addToBasket={this.addToBasket} screenWidth={this.state.screenWidth} {...routeProps} />} />
					<Route path="/products/searchTerm/:subcategory/:term"
						render={routeProps => <View basket={this.state.basket} addToBasket={this.addToBasket} screenWidth={this.state.screenWidth} {...routeProps} />} />
					<Route path="/fullView/:id"
						render={routeProps => <FullView basket={this.state.basket} addToBasket={this.addToBasket.bind(this)} screenWidth={this.state.screenWidth} {...routeProps} />} />
				</div>
				<Basket basket={this.state.basket} addToBasket={this.addToBasket} addRemoveFromBasket={this.addRemoveFromBasket.bind(this)} deleteFromBasket={this.deleteFromBasket.bind(this)}></Basket>
			</div>
		);
	}
	updateWindowDimensions() {
		this.setState({ screenWidth: window.innerWidth });
	}

	addToBasket(item) {
		if (Object.keys(this.state.basket).length > 0) {
			const duplicateProducts = Object.values(this.state.basket).filter((basketItem) => {
				if (Number(basketItem.product_id) === Number(item.product_id)) {
					return basketItem;
				}
			});
			if (duplicateProducts.length === 0) {
				this.setState({ basket: { ...this.state.basket, [item.product_id]: { ...item, qty: 1 } } }, () => console.log(this.state.basket, 'this.state.basket222'))
			} else {
				this.setState({ basket: { ...this.state.basket, [item.product_id]: { ...item, qty: duplicateProducts[0].qty + 1 } } }, () => console.log(this.state.basket, 'this.state.basket222'))
			}

		} else {
			this.setState({ basket: { [item.product_id.toString()]: { ...item, qty: 1 } } }, () => console.log(this.state.basket, 'this.state.basket222'))
		}
	}

	addRemoveFromBasket(direction, product_id) {
		const basket = this.state.basket;
		if (direction === 'up'){
			basket[product_id].qty++;
			this.setState({basket});
		} else {
			if (basket[product_id].qty === 1) {
				delete basket[product_id];
				this.setState({basket});
			} else {
				basket[product_id].qty--;
				this.setState({basket});
			}
		} 
	}

	deleteFromBasket(product_id) {
		const basket = this.state.basket;
		delete basket[product_id];
		this.setState({basket});
	}
}

export default App;
