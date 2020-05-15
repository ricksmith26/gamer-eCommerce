import React, { Component } from 'react';
import * as userApi from '../../../routes/usersRoutes';
import './PopUp.css';
import '../../../shared/shared.css';
import '../Login.css';

class PopUp extends Component {
    state = {
        user_first_name: 'Rick',
        user_last_name: 'Smith',
        user_email: 'ricksmith26@hotmail.com',
        user_password: 'password',
        user_phone_number: '07939456789',
        user_address1: '1233 street',
        user_address2: 'Town',
        user_address3: 'County',
        user_post_code: 'Pr7 8uj',

    }

    render() {
        return (
            <div onClick={this.handleClick}>
                <div className={!this.props.open ? 'hidden' : 'blackBackground'}></div>
                <div className={!this.props.open ? 'loginBox' : 'loginBox loginOpen'}>
                    {!this.state.created ? <div className="loginContainer">
                        <h2>Register</h2>
                        <div className="details1">
                            <div className="inputContainer">
                                <label htmlFor="Firstname">Firstname</label>
                                <input className="text-input inputAdj" type="text" onChange={(e) => this.handleTextInput(e, 'user_first_name')} value="Rick" />
                            </div>
                            <div className="inputContainer">
                                <label htmlFor="Lastname">Lastname</label>
                                <input className="text-input inputAdj" type="text" onChange={(e) => this.handleTextInput(e, 'user_last_name')} value="Smith" />
                            </div>
                            <div className="inputContainer">
                                <label htmlFor="Lastname">Email</label>
                                <input className="text-input inputAdj" type="text" onChange={(e) => this.handleTextInput(e, 'user_email')} value="ricksmith26@hotmail.com" />
                            </div>
                            <div className="inputContainer">
                                <label htmlFor="Lastname">Password</label>
                                <input className="text-input inputAdj" type="password" onChange={(e) => this.handleTextInput(e, 'user_password')} value="password" />
                            </div>
                            <div className="inputContainer">
                                <label htmlFor="Lastname">Confirm Password</label>
                                <input className="text-input inputAdj" type="password" onChange={(e) => this.handleTextInput(e, 'user_password')} value="password" />
                            </div>
                            <div className="inputContainer">
                                <label htmlFor="Lastname">Phone Number</label>
                                <input className="text-input inputAdj" type="text" onChange={(e) => this.handleTextInput(e, 'user_phone_number')} value="07939456789" />
                            </div>
                        </div>
                        <div className="inputContainer">
                            <label htmlFor="Lastname">Address Line 1</label>
                            <input className="text-input inputAdj" type="text" onChange={(e) => this.handleTextInput(e, 'user_address1')} value="1233 street" />
                        </div>
                        <div className="inputContainer">
                            <label htmlFor="Lastname">Address Line 2</label>
                            <input className="text-input inputAdj" type="text" onChange={(e) => this.handleTextInput(e, 'user_address2')} value="Town" />
                        </div>
                        <div className="inputContainer">
                            <label htmlFor="Lastname">Address Line 3</label>
                            <input className="text-input inputAdj" type="text" onChange={(e) => this.handleTextInput(e, 'user_address3')} value="County" />
                        </div>
                        <div className="inputContainer">
                            <label htmlFor="Lastname">Postcode</label>
                            <input className="text-input inputAdj" type="text" onChange={(e) => this.handleTextInput(e, 'user_post_code')} value="Pr7 8uj" />
                        </div>
                        <div className="btnCon">
                            <button className="yellowBtn" onClick={() => this.handleRegister()}>Submit</button>
                            <button className="redBtn" onClick={() => this.props.handleClose()}>Cancel</button>
                        </div>

                    </div> : <div className="loginContainer">
                            <h3>Registered</h3><svg class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"><circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none" /><path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" /></svg>
                            <h4 className="confirmationText">{this.state.user_first_name} {this.state.user_last_name}</h4>
                            <div className="centeredRowFlex">
                                <h4 className="confirmationText">{this.state.user_email}</h4>
                                <h4 className="confirmationText">{this.state.user_phone_number}</h4>
                            </div>
                            <h4 className="confirmationText">{this.state.user_address1}</h4>
                            <h4 className="confirmationText">{this.state.user_address2}</h4>
                            <h4 className="confirmationText">{this.state.user_address3}</h4>
                            <h4 className="confirmationText">{this.state.user_post_code}</h4>
                            <button className="yellowBtn" onClick={() => this.props.handleClose()}>Continue</button>
                        </div>}
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
        const newUser = await userApi.registerUser(user);
        if (newUser.status === 200) {
            this.setState({ created: true },
                () => this.handleLoginData(user))
        }
    }

    handleLoginData(user) {
        delete user['user_password'];
        this.props.handleIconChange(`${user.user_first_name[0]}${user.user_last_name[0]}`.toUpperCase());
        this.props.setUserInfo(user)
    }
}
export default PopUp;
