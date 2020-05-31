import React, {Component} from 'react';

class UserSignUp extends Component {
    
    state = {
        errorsPresent: false,
        errors: {

        }
    }

    render() {
        
        return (
            <div className="loginContainer">
                        <h2 style={{color: '#343409', marginTop: '16px'}}>Register</h2>
                        <div className="details1">
                            <div className="inputContainer">
                                <label style={{color: '#343409'}} htmlFor="Firstname">Firstname</label>
                                <input
                                    className="text-input inputAdj"
                                    type="text"
                                    onChange={(e) => this.props.handleTextInput(e, 'user_first_name')}
                                    value={this.props.state.user_first_name} />
                                <div className="errors">{this.props.state.errors.user_first_name}</div>
                            </div>
                            <div className="inputContainer">
                                <label style={{color: '#343409'}} htmlFor="Lastname">Lastname</label>
                                <input
                                    className="text-input inputAdj"
                                    type="text"
                                    onChange={(e) => this.props.handleTextInput(e, 'user_last_name')}
                                    value={this.props.state.user_last_name}/>
                                    <div className="errors">{this.props.state.errors.user_last_name}</div>
                            </div>
                            <div className="inputContainer">
                                <label style={{color: '#343409'}} htmlFor="Lastname">Email</label>
                                <input
                                    className="text-input inputAdj"
                                    type="text"
                                    onChange={(e) => this.props.handleTextInput(e, 'user_email')}
                                    value={this.props.state.user_email}/>
                                <div className="errors">{this.props.state.errors.user_email}</div>
                            </div>
                            <div className="inputContainer">
                                <label style={{color: '#343409'}} htmlFor="Lastname">Phone Number</label>
                                <input
                                    className="text-input inputAdj"
                                    type="text"
                                    onChange={(e) => this.props.handleTextInput(e, 'user_phone_number')}
                                    value={this.props.state.user_phone_number} />
                                <div className="errors">{this.props.state.errors.user_phone_number}</div>
                            </div>
                            <div className="inputContainer">
                                <label style={{color: '#343409'}} htmlFor="Lastname">Password</label>
                                <input
                                    className="text-input inputAdj"
                                    type="password"
                                    onChange={(e) => this.props.handleTextInput(e, 'user_password')}
                                    value={this.props.state.user_password} />
                            </div>
                            <div className="inputContainer">
                                <label style={{color: '#343409'}} htmlFor="Lastname">Confirm Password</label>
                                <input
                                    className="text-input inputAdj"
                                    type="password"
                                    onChange={(e) => this.props.handleTextInput(e, 'user_confirm_password')}
                                    value={this.props.state.user_confirm_password}/>
                                <div className="errors">{this.props.state.errors.user_password}</div>
                            </div>
                        </div>
                        <div className="inputContainer">
                            <label style={{color: '#343409'}} htmlFor="Lastname">Address Line 1</label>
                            <input
                                className="text-input inputAdj"
                                type="text"
                                onChange={(e) => this.props.handleTextInput(e, 'user_address1')}
                                value={this.props.state.user_address1} />
                                <div className="errors">{this.props.state.errors.user_address1}</div>
                        </div>
                        <div className="inputContainer">
                            <label style={{color: '#343409'}} htmlFor="Lastname">Address Line 2</label>
                            <input
                                className="text-input inputAdj"
                                type="text"
                                onChange={(e) => this.props.handleTextInput(e, 'user_address2')}
                                value={this.props.state.user_address2} />
                            <div className="errors">{this.props.state.errors.user_address2}</div>
                        </div>
                        <div className="inputContainer">
                            <label style={{color: '#343409'}} htmlFor="Lastname">Address Line 3</label>
                            <input
                                className="text-input inputAdj"
                                type="text"
                                onChange={(e) => this.props.handleTextInput(e, 'user_address3')}
                                value={this.props.state.user_address3} />
                            <div className="errors">{this.props.state.errors.user_address3}</div>
                        </div>
                        <div className="inputContainer">
                            <label style={{color: '#343409'}} htmlFor="Lastname">Postcode</label>
                            <input
                                className="text-input inputAdj"
                                type="text"
                                onChange={(e) => this.props.handleTextInput(e, 'user_post_code')}
                                value={this.props.state.user_post_code} />
                            <div className="errors">{this.props.state.errors.user_post_code}</div>
                        </div>
                        <div className="btnCon">
                            <div className="yellowBtn roundedYellow" onClick={() => this.props.checkFormOrSubmit()}>Submit</div>
                            <div className="redBtn roundedRed" onClick={() => this.props.handleClose()}>Cancel</div>
                        </div>
                        <div className="yellowBtn roundedYellow" onClick={() => this.props.backToLogin()}>Back to login</div>

                    </div>
        )
    }

}

export default UserSignUp;