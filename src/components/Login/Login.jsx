import React, { Component } from 'react';
import userProfile from '../../userprofile.svg';
import PopUp from './components/PopUp';
import '../../shared/shared.css';
import './Login.css';

class Login extends Component {

    state = {
        open: false,
        initials: '',
        viewProfile: false,
        userProfile: {
            user_first_name: ''
        }
    }

    static getDerivedStateFromProps(props, state) {
        console.log(props, 'LOGIN<<<')
        if (props.userProfile.user_first_name !== state.userProfile.userProfile) {
          return { initials: `${props.userProfile.user_first_name[0]}${props.userProfile.user_last_name[0]}` }
        } else {
            return null
        }
    }

    render() {
        return (
            <div className={`userBarProfile ${this.props.screenWidth < 750 ? 'mobileLogin' : ''}`} onClick={() => this.handleOpen()}>
                {this.state.initials.length === 0
                    ? <div>
                        <img className="usrImg" alt='user-login' src={userProfile} />
                        <h5 className='login'>Login / Register</h5></div>
                    : <div className={`${this.props.screenWidth < 750 ? 'initialsMobile' : 'initials'}`} onClick={() => this.openProfile()}><h1 >{this.state.initials}</h1></div>}

                <PopUp
                    open={this.state.open}
                    handleClose={this.handleClose.bind(this)}
                    handleIconChange={this.handleIconChange.bind(this)}
                    setUserInfo={this.props.setUserInfo.bind(this)}
                    viewProfile={this.state.viewProfile}
                    userProfile={this.props.userProfile}></PopUp>
            </div>
        )
    }

    handleClose() {
        this.setState({ open: false })
    }

    handleOpen() {
        if (this.state.initials.length === 0) {
            this.setState({ open: true })
        }
    }

    handleIconChange(initials) {
        this.setState({ initials })
    }

    openProfile() {
        this.setState({viewProfile: true, open: true})
    }
}

export default Login;