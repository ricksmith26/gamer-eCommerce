import React, { Component } from 'react';
import './Userbar.css';
import userProfile from '../../userprofile.svg';
import logo2 from '../../LogoMakr_3jtory.png';

class Userbar extends Component {

    render() {
        return (
            <div className="userbarContainer">
                <div className="userBarItem"></div>
                <div className="logoBarItem">
                    <img className="logo" src={logo2} />
                    <input id="search" className="text-input" type="text" placeholder="Search.."/>
                </div>
                <div className="userBarProfile">
                    <img className="usrImg" alt='user-login' src={userProfile} />
                    <h5 className='login'>Login / Register</h5>
                </div>
            </div>
        )
    }
}
export default Userbar;