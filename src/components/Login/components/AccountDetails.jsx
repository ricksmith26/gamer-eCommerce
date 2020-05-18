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
            <button className="yellowBtn" style={{marginBottom: '12px'}} onClick={() => props.editDetails()}>Edit</button>
            <button className="redBtn" onClick={() => props.handleClose()}>Close</button>
        </div>
    )
}

export default AccountDetails