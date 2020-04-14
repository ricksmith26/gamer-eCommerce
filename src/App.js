import React from 'react';
import './App.css';
import './shared/shared.css';
import NavigationMenu from './components/NavigationMenu/NavigationMenu'
import Userbar from './components/Userbar/Userbar';
import AdvertSlider from './components/AdvertSlider/AdvertSlider';
import DisplayGrid from './components/DisplayGrid/DisplayGrid';

import { Route } from 'react-router-dom';

function App() {
	return (
		<div>
			<Userbar></Userbar>
			<div className='yellowBackground'>
				<div className="centeredRowFlex">
					<NavigationMenu></NavigationMenu>
				</div>
			</div>
			<div>
			<Route exact path="/" component={AdvertSlider} />
			<Route exact path="/:console" component={DisplayGrid} />
			<Route exact path="/:console/:term" component={DisplayGrid} />
			</div>
		</div>
	);
}

export default App;
