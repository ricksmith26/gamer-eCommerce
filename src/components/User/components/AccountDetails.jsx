import React from 'react';

function AccountDetails(props) {
    return (
        <div className="loginContainer">
            <h3>Account Details</h3>
            <h4 className="confirmationText">{props.userProfile.user_first_name} {props.userProfile.user_last_name}</h4>
            <div className="centeredRowFlex">
                <h4 className="confirmationText">{props.userProfile.user_email}</h4>
                <h4 className="confirmationText">{props.userProfile.user_phone_number}</h4>
            </div>
            <h4 className="confirmationText">{props.userProfile.user_address1}</h4>
            <h4 className="confirmationText">{props.userProfile.user_address2}</h4>
            <h4 className="confirmationText">{props.userProfile.user_address3}</h4>
            <h4 className="confirmationText">{props.userProfile.user_post_code}</h4>
            <div className="yellowBtn roundedYellow" style={{marginBottom: '12px'}} onClick={() => props.editDetails()}>Edit</div>
            <div className="yellowBtn roundedYellow" style={{marginBottom: '12px'}} onClick={() => props.logoutUser()}>Logout</div>
            <div className="redBtn roundedRed" onClick={() => props.handleClose()}>Close</div>
        </div>
    )
}

export default AccountDetails