import React, { Component } from 'react';
import * as userApi from '../../../routes/usersRoutes';
import UserSignUp from './UserSignUp';
import AccountDetails from './AccountDetails';
import EditAccountDetails from './EditAccountDetail';
import RegisteredAccount from './RegisteredAccount';
import { addToCache } from '../../../utils/cache';
import './PopUp.css';
import '../../../shared/shared.css';
import '../Login.css';

class PopUp extends Component {
    state = {
        user_first_name: 'Rick',
        user_last_name: 'Smith',
        user_email: 'ricksmith26@hotmail.com',
        user_password: 'password',
        user_confirm_password: 'password',
        user_phone_number: '07939456789',
        user_address1: '1233 street',
        user_address2: 'Town',
        user_address3: 'County',
        user_post_code: 'Pr7 8uj',
        index: 0,
        viewProfile: false,
        title: 'Register'
    }

    static getDerivedStateFromProps(props, state) {
        console.log(props, 'PopUpPopUp')
        if (props.viewProfile !== state.viewProfile) {
          return { viewProfile: props.viewProfile, index: 2 }
        } else {
            return null
        }
    }

    // componentDidMount() {
    //     console.log
    //     if (this.props.viewProfile) {
    //         this.setState({index: 2})
    //     }
    // }

    render() {
        return (
            <div onClick={this.handleClick}>
                <div className={!this.props.open ? 'hidden' : 'blackBackground'}></div>
                <div className={!this.props.open ? 'loginBox' : 'loginBox loginOpen'}>
                    {this.state.index === 0 &&
                        (<div className="loginContainer">
                            <h3>Login</h3>
                            <div className="inputContainer">
                                <label htmlFor="Lastname">Email</label>
                                <input className="text-input inputAdj" />
                            </div>
                            <div className="inputContainer">
                                <label htmlFor="Lastname">Password</label>
                                <input className="text-input inputAdj" />
                            </div>
                            <button className="yellowBtn" onClick={() => this.login({user_email: this.state.user_email, user_password: this.state.user_password})}>Login</button>
                            <p>Not Registered?</p>
                            <button className="yellowBtn" onClick={() => this.setState({ index: 1 })}>Register</button>
                        </div>)
                    }
                    {this.state.index === 1 &&
                        (!this.state.created
                            ? <UserSignUp
                                handleTextInput={this.handleTextInput.bind(this)}
                                handleRegister={this.handleRegister}
                                handleClose={this.props.handleClose}
                                state={this.state}
                            ></UserSignUp>
                            : 
                            <RegisteredAccount userProfile={this.state}></RegisteredAccount>)
                    }
                    {this.state.index === 2 && (
                        <AccountDetails
                            userProfile={this.props.userProfile}
                            editDetails={this.editDetails.bind(this)}></AccountDetails>
                    )}

                    {this.state.index === 3 && (
                        <EditAccountDetails
                            handleTextInput={this.handleTextInput.bind(this)}
                            userProfile={this.props.userProfile}
                            handleClose={this.props.handleClose.bind(this)}></EditAccountDetails>
                    )}

                </div>
            </div>
        )
    }
    handleClick(e) {
        e.stopPropagation();
    }

    handleTextInput(e, input) {
        this.setState({ [input]: e.target.value })
    }

    async handleRegister() {
        const user = this.state;
        console.log(user, '<<<<<USERMMMMM<<,')
        const newUser = await userApi.registerUser(user);
        if (newUser.status === 200) {
            this.setState({ created: true },
                () => this.handleLoginData(user))
        }
    }

    handleLoginData(user) {
        delete user['user_password'];
        this.props.handleIconChange(`${user.user_first_name[0]}${user.user_last_name[0]}`.toUpperCase());
        this.props.setUserInfo(user);
    }

    async login(loginDetails) {
        const userDetails = await userApi.loginFromEmail(loginDetails);
        console.log(userDetails,'<<<<')
        if (userDetails.valid) {
            this.props.handleClose();
            addToCache('game_shack_user', userDetails.user);
            this.handleLoginData(userDetails.user);
        } else {
            console.log('incorrect');
            this.setState({index: 2})
        }
    }

    editDetails() {
        this.setState({index: 3, title: 'Edit Details'}, () => console.log('EDITING>>' , this.state))
    }
}
export default PopUp;