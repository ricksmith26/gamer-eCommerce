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
                                <div className="errors">{this.state.errors.user_first_name}</div>
                            </div>
                            <div className="inputContainer">
                                <label style={{color: '#343409'}} htmlFor="Lastname">Lastname</label>
                                <input
                                    className="text-input inputAdj"
                                    type="text"
                                    onChange={(e) => this.props.handleTextInput(e, 'user_last_name')}
                                    value={this.props.state.user_last_name}/>
                                    <div className="errors">{this.state.errors.user_last_name}</div>
                            </div>
                            <div className="inputContainer">
                                <label style={{color: '#343409'}} htmlFor="Lastname">Email</label>
                                <input
                                    className="text-input inputAdj"
                                    type="text"
                                    onChange={(e) => this.props.handleTextInput(e, 'user_email')}
                                    value={this.props.state.user_email}/>
                                <div className="errors">{this.state.errors.user_email}</div>
                            </div>
                            <div className="inputContainer">
                                <label style={{color: '#343409'}} htmlFor="Lastname">Phone Number</label>
                                <input
                                    className="text-input inputAdj"
                                    type="text"
                                    onChange={(e) => this.props.handleTextInput(e, 'user_phone_number')}
                                    value={this.props.state.user_phone_number} />
                                <div className="errors">{this.state.errors.user_phone_number}</div>
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
                                    value={this.props.state.user_password}/>
                                <div className="errors">{this.state.errors.user_password}</div>
                            </div>
                        </div>
                        <div className="inputContainer">
                            <label style={{color: '#343409'}} htmlFor="Lastname">Address Line 1</label>
                            <input
                                className="text-input inputAdj"
                                type="text"
                                onChange={(e) => this.props.handleTextInput(e, 'user_address1')}
                                value={this.props.state.user_address1} />
                                <div className="errors">{this.state.errors.user_address1}</div>
                        </div>
                        <div className="inputContainer">
                            <label style={{color: '#343409'}} htmlFor="Lastname">Address Line 2</label>
                            <input
                                className="text-input inputAdj"
                                type="text"
                                onChange={(e) => this.props.handleTextInput(e, 'user_address2')}
                                value={this.props.state.user_address2} />
                            <div className="errors">{this.state.errors.user_address2}</div>
                        </div>
                        <div className="inputContainer">
                            <label style={{color: '#343409'}} htmlFor="Lastname">Address Line 3</label>
                            <input
                                className="text-input inputAdj"
                                type="text"
                                onChange={(e) => this.props.handleTextInput(e, 'user_address3')}
                                value={this.props.state.user_address3} />
                            <div className="errors">{this.state.errors.user_address3}</div>
                        </div>
                        <div className="inputContainer">
                            <label style={{color: '#343409'}} htmlFor="Lastname">Postcode</label>
                            <input
                                className="text-input inputAdj"
                                type="text"
                                onChange={(e) => this.props.handleTextInput(e, 'user_post_code')}
                                value={this.props.state.user_post_code} />
                            <div className="errors">{this.state.errors.user_post_code}</div>
                        </div>
                        <div className="btnCon">
                            <button className="yellowBtn" onClick={() => this.checkFormOrSubmit()}>Submit</button>
                            <button className="redBtn" onClick={() => this.props.handleClose()}>Cancel</button>
                        </div>

                    </div>
        )
    }

    checkFormOrSubmit() {
        let errors = {};
        if (!this.props.state.user_first_name || !this.props.state.user_first_name.length) {
            errors['user_first_name'] = 'First name must be entered';
        }
        if (!this.props.state.user_last_name || !this.props.state.user_last_name.length) {
            errors['user_last_name'] = 'Last name must be entered';
        }
        if (!this.props.state.user_user_email || !this.props.state.user_user_email.length.match(/\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/)) {
            errors['user_email'] = 'Please enter a valid email format'
        }
        if (!this.props.state.user_password || this.props.state.user_password !== this.props.state.user_confirm_password ) {
            errors['user_password'] = 'Passwords must match';
        }
        if (!this.props.state.user_address1 || !this.props.state.user_address1.length) {
            errors['user_address1'] = 'Address Line 1 must be entered';
        }
        if (!this.props.state.user_address2 || !this.props.state.user_address2.length) {
            errors['user_address2'] = 'Address Line 2 must be entered';
        }
        if (!this.props.state.user_address3 || !this.props.state.user_address3.length) {
            errors['user_address3'] = 'Address Line 3 must be entered';
        }
        if (!this.props.state.user_post_code || !this.props.state.user_post_code.length) {
            errors['user_post_code'] = 'Post code must be entered';
        }
       
        if (!Object.values(errors).length) {
            this.props.handleRegister();
        } else {
            this.setState({errors})
        }

    }
}

export default UserSignUp;