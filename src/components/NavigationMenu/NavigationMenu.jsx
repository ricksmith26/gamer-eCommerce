import React, { Component } from 'react';
import MenuItem from './components/MenuItem';
import './NavigationMenu.css';
import * as api from '../../routes/menuItemsRoutes';

class NavigationMenu extends Component {

    state = {
        menuItems: []
    }

    componentDidMount = async() => {
        this.setState({ menuItems: await api.getMenuItems()});
    }

    render() {
        return (
            <div className="menuContainer">
                {this.state.menuItems.length ? this.state.menuItems.map((item, i) => {
                    return(
                        <MenuItem navMenuItem={item} index={i} key={i}></MenuItem>
                       
                         
                         )
                }) : null}
            </div>
        )
    }
}
export default NavigationMenu;