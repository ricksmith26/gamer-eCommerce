import React, { Component } from 'react';
import './Userbar.css';
import male from '../../male.svg';

class Userbar extends Component {

    render() {
        return (
            <div class="userbarContainer">
                <div className="userBarItem"></div>
                <div className="userBarItem"></div>
                <div className="userBarItem">
                    <img className="usrImg" alt='user-login' src={male} />
                </div>
            </div>
        )
    }
}
export default Userbar;