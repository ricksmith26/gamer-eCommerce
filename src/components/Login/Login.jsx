import React, { Component } from 'react';
import userProfile from '../../userprofile.svg';
import PopUp from './components/PopUp';
import '../../shared/shared.css';
import './Login.css';

class Login extends Component {

    state = {
        open: false
    }


    render() {
        return (
            <div className="userBarProfile" onClick={() => this.setState({ open: !this.state.open })}>
                <img className="usrImg" alt='user-login' src={userProfile} />
                <h5 className='login'>Login / Register</h5>
                <PopUp open={this.state.open} handleClose={this.handleClose.bind(this)}></PopUp>
            </div>
        )
    }

    handleClose() {
        console.log('firing<<<<,,')
        this.setState({open: false})
    }
}

export default Login;