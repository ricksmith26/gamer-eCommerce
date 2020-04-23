import React, { Component } from 'react';
import './MobileHamburgerMenu.css';
import '../../shared/shared.css';
import * as api from '../../routes/menuItemsRoutes';
import Accordian from './components/Accordian/Accordian'

class MobileNavigation extends Component {
    state = {
        menuItems: [],
        open: false
    }

    componentDidMount = async() => {
        this.setState({ menuItems: await api.getMenuItems()});
    }

    render() {
        return (
            <div>
                <div class="header"></div>
                <input type="checkbox" class="openSidebarMenu" id="openSidebarMenu" onChange={() => this.setState({open: !this.state.open})}/>
                    <label for="openSidebarMenu" class="sidebarIconToggle">
                        <div class="spinner diagonal part-1"></div>
                        <div class="spinner horizontal"></div>
                        <div class="spinner diagonal part-2"></div>
                    </label>
                    <div id="sidebarMenu">
                    <ul class="sidebarMenuInner">
                    {this.state.menuItems && this.state.open && this.state.menuItems.map((item) => {
                        return <li className="category"><Accordian handleClose={() => this.handleClose()} item={item}>

                        </Accordian></li>
                    })}</ul>
                    </div>

            </div>

        )
    }

    handleClose() {
        document.getElementById('openSidebarMenu').click();
    }
}

export default MobileNavigation;