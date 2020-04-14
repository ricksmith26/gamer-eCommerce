import React, { Component } from 'react';
import {menuItems} from '../../shared/game-data';
import MenuItem from './components/MenuItem';
import './NavigationMenu.css';

class NavigationMenu extends Component {

    render() {
        return (
            <div className="menuContainer">
                {menuItems.map((item, i) => {
                    return(
                        <MenuItem navMenuItem={item} index={i} key={i}></MenuItem>
                       
                         
                         )
                })}
            </div>
        )
    }
}
export default NavigationMenu;