import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './MobileHamburgerMenu.css';
import '../../shared/shared.css';
import * as api from '../../routes/menuItemsRoutes';
import Accordian from './components/Accordian/Accordian';
import Login from '../User/User';
import mobileIcon from '../../shared/mobileicon.png';

class MobileNavigation extends Component {
    is_mounted = false;
    state = {
        menuItems: [],
        open: false
    }

    componentDidMount = async () => {
        this.is_mounted = true;
        api.getMenuItems().then(menuItems => {
            if (this.is_mounted) {
                this.setState({menuItems})
            }
        })
    }

    componentWillUnmount = async () => {
        this.is_mounted = false;
        
    }

    render() {
        return (
            <div>
                <div className="header">
                    <div className="centeredRowFlex">
                        <Link to="/">
                            <img src={mobileIcon} className="mobileIcon" alt="mobileIcon"/>
                        </Link>
                    </div>
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
                        {this.state.menuItems && this.state.open && this.state.menuItems.map((item, i) => {
                            return <li className="category" key={`li${item.category_name}${i}`}><Accordian handleClose={() => this.handleClose()} item={item}>

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