import React, { Component } from 'react';

function RegisteredAccount(props) {
    return (
        <div className="loginContainer">
            <h3>Registered</h3><svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"><circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none" /><path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" /></svg>
            <h4 className="confirmationText">{props.userProfile.user_first_name} {props.userProfile.user_last_name}</h4>
            <div className="centeredRowFlex">
                <h4 className="confirmationText">{props.userProfile.user_email}</h4>
                <h4 className="confirmationText">{props.userProfile.user_phone_number}</h4>
            </div>
            <h4 className="confirmationText">{props.userProfile.user_address1}</h4>
            <h4 className="confirmationText">{props.userProfile.user_address2}</h4>
            <h4 className="confirmationText">{props.userProfile.user_address3}</h4>
            <h4 className="confirmationText">{props.userProfile.user_post_code}</h4>
            <button className="yellowBtn" onClick={() => this.props.handleClose()}>Continue</button>
        </div>
    )
}

export default RegisteredAccount;