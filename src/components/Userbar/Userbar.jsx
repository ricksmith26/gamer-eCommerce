import React, { Component } from 'react';
import './Userbar.css';
import logo2 from '../../LogoMakr_3jtory.png';
import Login from '../Login/Login';

class Userbar extends Component {

    render() {
        return (
            <div className="userbarContainer">
                <div className="userBarItem"></div>
                <div className="logoBarItem">
                    <img className="logo" src={logo2} alt="logo"/>
                    <input id="search" className="text-input" type="text" placeholder="Search.."/>
                </div>
               <Login setUserInfo={this.props.setUserInfo.bind(this)} userProfile={this.props.userProfile} screenWidth={this.props.screenWidth}/>
            </div>
        )
    }
}
export default Userbar;