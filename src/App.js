import React, { Component } from 'react';
import './App.css';
import './shared/shared.css';
import NavigationMenu from './components/NavigationMenu/NavigationMenu'
import Userbar from './components/Userbar/Userbar';
import AdvertSlider from './components/AdvertSlider/AdvertSlider';
import MobileNavigationMenu from './components/MobileNavigationMenu/MobileNavigationMenu';
import Checkout from './components/Checkout/Checkout';

import { Route } from 'react-router-dom';
import FullView from './components/Fullview/Fullview';
import View from './components/View/View';
import Basket from './components/Basket/Basket';

import * as userApi from './routes/usersRoutes';

import {loadFromCache, addToCache, clear} from './utils/cache';

class App extends Component {

	constructor() {
		super();
		this.state = {
			screenWidth: null,
			basket: {},
			userProfile: {}
		};
		this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
	}

	async componentDidMount() {
		this.updateWindowDimensions()
		window.addEventListener("resize", () => this.updateWindowDimensions());
		this.initData();
	}

	componentWillUnmount() {
		window.removeEventListener("resize", this.updateWindowDimensions)
	}

	render() {

		return (
			<div className="App">
			{this.state.screenWidth > 750 ? <div><Userbar setUserInfo={this.setUserInfo.bind(this)} userProfile={this.state.userProfile}></Userbar>
					<div className='yellowBackground'>
						<div className="centeredRowFlex">
							<NavigationMenu></NavigationMenu>
						</div>
					</div></div> : <MobileNavigationMenu
									setUserInfo={this.setUserInfo.bind(this)}
									userProfile={this.state.userProfile}
									screenWidth={this.state.screenWidth}></MobileNavigationMenu>}
				
					<Route exact path="/"
						component={() => <AdvertSlider screenWidth={this.state.screenWidth}></AdvertSlider>} />

					<Route 	path="/products/subcategory/:subcategory"
							render={routeProps => <View
							basket={this.state.basket}
							addToBasket={this.addToBasket}
							screenWidth={this.state.screenWidth}
							{...routeProps} />} />

					<Route 
						path="/products/searchTerm/:subcategory/:term"
						render={routeProps => <View
												basket={this.state.basket}
												addToBasket={this.addToBasket}
												screenWidth={this.state.screenWidth}
												{...routeProps} />} />
					<Route
						path="/fullView/:id"
						render={routeProps => <FullView
												basket={this.state.basket}
												addToBasket={this.addToBasket.bind(this)}
												screenWidth={this.state.screenWidth}
												{...routeProps} />} />

					<Route exact path="/checkout"
						render={routeProps => <Checkout basket={this.state.basket}
												addToBasket={this.addToBasket}
												addRemoveFromBasket={this.addRemoveFromBasket.bind(this)}
												screenWidth={this.state.screenWidth}
												deleteFromBasket={this.deleteFromBasket.bind(this)}
												userProfile={this.state.userProfile}
												clearBasket={this.clearBasket.bind(this)}></Checkout>}></Route>
												
					<Basket
						basket={this.state.basket}
						addToBasket={this.addToBasket}
						addRemoveFromBasket={this.addRemoveFromBasket.bind(this)}
						deleteFromBasket={this.deleteFromBasket.bind(this)}
						screenWidth={this.state.screenWidth}></Basket>
			</div>
		);
	}
	updateWindowDimensions() {
		this.setState({ screenWidth: window.innerWidth });
	}

	addToBasket(item) {
		if (Object.keys(this.state.basket).length > 0) {
			const duplicateProducts = Object.values(this.state.basket).filter((basketItem) => {
					return Number(basketItem.product_id) === Number(item.product_id);
			});
			if (duplicateProducts.length === 0) {
				this.setState({
					basket: { ...this.state.basket, [item.product_id]: { ...item, qty: 1 } } },
					() => addToCache('game_shack_basket', this.state.basket))
			} else {
				this.setState({
					basket: { ...this.state.basket, [item.product_id]: { ...item, qty: duplicateProducts[0].qty + 1 } } },
					() => addToCache('game_shack_basket', this.state.basket))
			}

		} else {
			this.setState({
				basket: { [item.product_id.toString()]: { ...item, qty: 1 } } },
				() => addToCache('game_shack_basket', this.state.basket))
		}
	}

	addRemoveFromBasket(direction, product_id) {
		const basket = this.state.basket;
		if (direction === 'up'){
			basket[product_id].qty++;
			this.setState({basket},
				() => addToCache('game_shack_basket', this.state.basket));
		} else {
			if (basket[product_id].qty === 1) {
				delete basket[product_id];
				this.setState({basket},
					() => addToCache('game_shack_basket', this.state.basket));
			} else {
				basket[product_id].qty--;
				this.setState({basket},
					() => addToCache('game_shack_basket', this.state.basket));
			}
		} 
	}

	deleteFromBasket(product_id) {
		const basket = this.state.basket;
		delete basket[product_id];
		this.setState({basket},
			() => addToCache('game_shack_basket', this.state.basket));
	}

	clearBasket() {
		this.setState({basket: {}}, () => addToCache('game_shack_basket', this.state.basket))
	}

	setUserInfo(userProfile) {
		this.setState({userProfile});
	}

	async initData() {
		const storedBasket = loadFromCache('game_shack_basket');
		if (storedBasket) {
			this.setState({basket: storedBasket})
		}
		const storedLogin = loadFromCache('game_shack_user');
		if (storedLogin) {
			const validToken =  await userApi.loginFromToken(storedLogin.login_token);
			if (validToken.valid) {
				this.setState({userProfile: storedLogin}, () => {
					addToCache('game_shack_user', validToken.user)
				});
			}
		}
	}
}

export default App;
