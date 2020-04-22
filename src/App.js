import React, { Component } from 'react';
import './App.css';
import './shared/shared.css';
import NavigationMenu from './components/NavigationMenu/NavigationMenu'
import Userbar from './components/Userbar/Userbar';
import AdvertSlider from './components/AdvertSlider/AdvertSlider';
import DisplayGrid from './components/DisplayGrid/DisplayGrid';
import MobileNavigationMenu from './components/MobileNavigationMenu/MobileNavigationMenu';

import { Route } from 'react-router-dom';

class App extends Component {

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
					<Route exact path="/" component={() => <AdvertSlider screenWidth={this.state.screenWidth}></AdvertSlider>} />
					{/* <Route path="games/:console/:term" component={DisplayGrid} /> */}
					<Route path="/games/:console/:term" component={DisplayGrid} />
				</div>
			</div>
		);
	}
	updateWindowDimensions() {
		this.setState({ screenWidth: window.innerWidth });
	}
}

export default App;
