import React from 'react';
import logo from './logo.svg';
import './App.css';
import './shared/shared.css';
import NavigationMenu from './components/NavigationMenu/NavigationMenu'
import Userbar from './components/Userbar/Userbar';
import AdvertSlider from './components/AdvertSlider/AdvertSlider';

function App() {
	return (
		<div>
			<Userbar></Userbar>
			<div class='yellowBackground'>
				<div className="centeredRowFlex">
					<NavigationMenu></NavigationMenu>
				</div>
			</div>
			<AdvertSlider></AdvertSlider>
		</div>
	);
}

export default App;
