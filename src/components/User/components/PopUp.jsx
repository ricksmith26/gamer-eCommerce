import React, { Component } from 'react';
import * as userApi from '../../../routes/usersRoutes';
import UserSignUp from './UserSignUp';
import AccountDetails from './AccountDetails';
import EditAccountDetails from './EditAccountDetail';
import RegisteredAccount from './RegisteredAccount';
import Login from './Login';
import { addToCache, clear } from '../../../utils/cache';
import darkClose from '../../../shared/darkclose.svg';
import './PopUp.css';
import '../../../shared/shared.css';
import '../User.css';

class PopUp extends Component {
    state = {
        user_first_name: '',
        user_last_name: '',
        user_email: '',
        user_password: '',
        user_confirm_password: '',
        user_phone_number: '',
        user_address1: '',
        user_address2: '',
        user_address3: '',
        user_post_code: '',
        index: 0,
        viewProfile: false,
        title: 'Register',
        errors: {

        }
    }

    static getDerivedStateFromProps(props, state) {
        if (props.viewProfile !== state.viewProfile) {
          return { viewProfile: props.viewProfile, index: 2 }
        } else {
            return null
        }
    }

    render() {
        return (
            <div onClick={this.handleClick}>
                <div className={!this.props.open ? 'hidden' : 'blackBackground'}></div>
                <div className={!this.props.open ? 'loginBox' : 'loginBox loginOpen'}>
                    <div className="closePopup" onClick={() => this.props.handleClose()}>
                        <img src={darkClose} alt="X" style={{height: '12px', width: '12px'}}/>
                    </div>
                    {this.state.index === 0 &&
                        <Login
                            changeIndex={this.changeIndex}
                            login={this.login}
                            handleTextInput={this.handleTextInput.bind(this)}
                            state={this.state}
                            ></Login>
                    }
                    {this.state.index === 1 &&
                        (!this.state.created
                            ? <UserSignUp
                                handleTextInput={this.handleTextInput.bind(this)}
                                checkFormOrSubmit={this.checkFormOrSubmit}
                                handleClose={this.props.handleClose}
                                backToLogin={this.changeIndex}
                                state={this.state}
                            ></UserSignUp>
                            : 
                            <RegisteredAccount userProfile={this.state}></RegisteredAccount>)
                    }
                    {this.state.index === 2 && (
                        <AccountDetails
                            userProfile={this.props.userProfile}
                            editDetails={this.editDetails.bind(this)}
                            handleClose={this.props.handleClose.bind(this)}
                            logoutUser={this.logoutUser}></AccountDetails>
                    )}

                    {this.state.index === 3 && (
                        <EditAccountDetails
                            handleTextInput={this.handleTextInput.bind(this)}
                            userProfile={this.props.userProfile}
                            closeEdit={this.closeEdit.bind(this)}></EditAccountDetails>
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

    // register new user
    handleRegister = async () => {
        const user = this.state;
        const newUser = await userApi.registerUser(user);
        if (newUser.data.error === "email already exists") {
            this.setState({errors: {user_email: newUser.data.error}})
        }
        else {
            this.setState({ created: true },
                () => this.handleLoginData(user))
        } 
       
    }

    //set initials on icon and pass data to app level
    handleLoginData(user) {
        delete user['user_password'];
        this.props.handleIconChange(`${user.user_first_name[0]}${user.user_last_name[0]}`.toUpperCase());
        this.props.setUserInfo(user);
    }

    // logout user and clear info
    logoutUser = () => {
        clear('game_shack_user');
        this.props.handleIconChange(``);
        this.props.setUserInfo({})
        this.setState({index: 0}, () => this.props.handleClose())
    }

    //login user
    login = async (loginDetails) => {
        const userDetails = await userApi.loginFromEmail(loginDetails);
        if (userDetails.valid) {
            this.props.handleClose();
            addToCache('game_shack_user', userDetails.user);
            this.handleLoginData(userDetails.user);
        } 
    }

    // go to edit page
    editDetails() {
        this.setState({index: 3, title: 'Edit Details'})
    }

    changeIndex = (index) => {
        this.setState({index})
    }
    
    closeEdit() {
        this.props.handleClose();
        this.setState({index: 2})
    }

    // create errors object or submit
    checkFormOrSubmit = async () => {
        let errors = {};
        const emailReg =  /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}/gi;

        if (!this.state.user_first_name && !this.state.user_first_name.length) {
            errors['user_first_name'] = 'First name must be entered';
        }
        if (!this.state.user_last_name && !this.state.user_last_name.length) {
            errors['user_last_name'] = 'Last name must be entered';
        }
        if (!this.state.user_user_email && !this.state.user_email.match(emailReg)) {
            errors['user_email'] = 'Please enter a valid email format'
        }
        if (!this.state.user_password && this.state.user_password !== this.state.user_confirm_password ) {
            errors['user_password'] = 'Passwords must match';
        }
        if (!this.state.user_address1 && !this.state.user_address1.length) {
            errors['user_address1'] = 'Address Line 1 must be entered';
        }
        if (!this.state.user_address2 && !this.state.user_address2.length) {
            errors['user_address2'] = 'Address Line 2 must be entered';
        }
        if (!this.state.user_address3 && !this.state.user_address3.length) {
            errors['user_address3'] = 'Address Line 3 must be entered';
        }
        if (!this.state.user_post_code && !this.state.user_post_code.length) {
            errors['user_post_code'] = 'Post code must be entered';
        }
       
        if (!Object.values(errors).length) {
           this.handleRegister();
        } else {
            this.setState({errors})
        }

    }
}
export default PopUp;
