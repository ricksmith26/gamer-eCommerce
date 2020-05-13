import React, { Component } from 'react';
import userProfile from '../../userprofile.svg';
import '../../shared/shared.css';
import './Login.css';

class Login extends Component {

    state = {
        open: false

    }

    render() {
        return (
            <div className="userBarProfile" onClick={() => this.setState({open: !this.state.open})}>
                <img className="usrImg" alt='user-login' src={userProfile} />
                <h5 className='login'>Login / Register</h5>
                <div className={!this.state.open ? 'hidden' : 'blackBackground'}></div>
                <div className={!this.state.open ? 'loginBox' : 'loginBox loginOpen'}></div>
            </div>
        )
    }
}

export default Login;