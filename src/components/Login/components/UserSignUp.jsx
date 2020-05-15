import React, {Component} from 'react';

class UserSignUp extends Component {
    
    state = {

    }

    render() {
        console.log(this.props)
        return (
            <div className="loginContainer">
                        <h2>Register</h2>
                        <div className="details1">
                            <div className="inputContainer">
                                <label htmlFor="Firstname">Firstname</label>
                                <input
                                    className="text-input inputAdj"
                                    type="text"
                                    onChange={(e) => this.props.handleTextInput(e, 'user_first_name')}
                                    value={this.props.state.user_first_name} />
                            </div>
                            <div className="inputContainer">
                                <label htmlFor="Lastname">Lastname</label>
                                <input
                                    className="text-input inputAdj"
                                    type="text"
                                    onChange={(e) => this.props.handleTextInput(e, 'user_last_name')}
                                    value={this.props.state.user_last_name}/>
                            </div>
                            <div className="inputContainer">
                                <label htmlFor="Lastname">Email</label>
                                <input
                                    className="text-input inputAdj"
                                    type="text"
                                    onChange={(e) => this.props.handleTextInput(e, 'user_email')}
                                    value={this.props.state.user_email} />
                            </div>
                            <div className="inputContainer">
                                <label htmlFor="Lastname">Phone Number</label>
                                <input
                                    className="text-input inputAdj"
                                    type="text"
                                    onChange={(e) => this.props.handleTextInput(e, 'user_phone_number')}
                                    value={this.props.state.user_phone_number} />
                            </div>
                            <div className="inputContainer">
                                <label htmlFor="Lastname">Password</label>
                                <input
                                    className="text-input inputAdj"
                                    type="password"
                                    onChange={(e) => this.props.handleTextInput(e, 'user_password')}
                                    value={this.props.state.user_password} />
                            </div>
                            <div className="inputContainer">
                                <label htmlFor="Lastname">Confirm Password</label>
                                <input
                                    className="text-input inputAdj"
                                    type="password"
                                    onChange={(e) => this.props.handleTextInput(e, 'user_password')}
                                    value="password" />
                            </div>
                        </div>
                        <div className="inputContainer">
                            <label htmlFor="Lastname">Address Line 1</label>
                            <input
                                className="text-input inputAdj"
                                type="text"
                                onChange={(e) => this.props.handleTextInput(e, 'user_address1')}
                                value="1233 street" />
                        </div>
                        <div className="inputContainer">
                            <label htmlFor="Lastname">Address Line 2</label>
                            <input
                                className="text-input inputAdj"
                                type="text"
                                onChange={(e) => this.props.handleTextInput(e, 'user_address2')}
                                value="Town" />
                        </div>
                        <div className="inputContainer">
                            <label htmlFor="Lastname">Address Line 3</label>
                            <input
                                className="text-input inputAdj"
                                type="text"
                                onChange={(e) => this.props.handleTextInput(e, 'user_address3')}
                                value="County" />
                        </div>
                        <div className="inputContainer">
                            <label htmlFor="Lastname">Postcode</label>
                            <input
                                className="text-input inputAdj"
                                type="text"
                                onChange={(e) => this.props.handleTextInput(e, 'user_post_code')}
                                value="Pr7 8uj" />
                        </div>
                        <div className="btnCon">
                            <button className="yellowBtn" onClick={() => this.props.handleRegister()}>Submit</button>
                            <button className="redBtn" onClick={() => this.props.handleClose()}>Cancel</button>
                        </div>

                    </div>
        )
    }
}

export default UserSignUp;