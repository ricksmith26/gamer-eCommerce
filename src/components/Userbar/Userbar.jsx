import React, { Component } from 'react';
import './Userbar.css';
import userProfile from '../../userprofile.svg';
import logo2 from '../../LogoMakr_3jtory.png';
import Login from '../Login/Login';

class Userbar extends Component {

    render() {
        return (
            <div className="userbarContainer">
                <div className="userBarItem"></div>
                <div className="logoBarItem">
                    <img className="logo" src={logo2} />
                    <input id="search" className="text-input" type="text" placeholder="Search.."/>
                </div>
               <Login/>
            </div>
        )
    }
}
export default Userbar;