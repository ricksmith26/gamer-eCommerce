import React, { Component } from 'react';
import './MobileHamburgerMenu.css';
import '../../shared/shared.css';
import * as api from '../../routes/menuItemsRoutes';
import Accordian from './components/Accordian/Accordian';
import Login from '../Login/Login';

class MobileNavigation extends Component {
    state = {
        menuItems: [],
        open: false
    }

    componentDidMount = async () => {
        if (this.props.screenWidth < 750) {

            this.setState({ menuItems: await api.getMenuItems() });
        }
    }

    componentWillUnmount = async () => {
        // await api.getMenuItems()
    }

    render() {
        return (
            <div>
                <div className="header">
                    <Login
                        setUserInfo={this.props.setUserInfo}
                        userProfile={this.props.userProfile}
                        screenWidth={this.props.screenWidth}></Login>
                </div>
                <input type="checkbox" className="openSidebarMenu" id="openSidebarMenu" onChange={() => this.setState({ open: !this.state.open })} />
                <label htmlFor="openSidebarMenu" className="sidebarIconToggle">
                    <div className="spinner diagonal part-1"></div>
                    <div className="spinner horizontal"></div>
                    <div className="spinner diagonal part-2"></div>
                </label>
                <div id="sidebarMenu">
                    <ul className="sidebarMenuInner">
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