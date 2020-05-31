import React, { Component } from 'react';

class Login extends Component {
    state = {

    }

    render() {
        return (
            <div className="loginContainer">
                <form>
                    <h3 style={{ color: '#343409' }}>Login</h3>
                    <div className="inputContainer">
                        <label htmlFor="Lastname" style={{ color: '#343409' }}>Email</label>
                        <input className="text-input inputAdj" autoComplete="email" onChange={(e) => this.props.handleTextInput(e, 'user_email')} />
                    </div>
                    <div className="inputContainer">
                        <label htmlFor="Lastname" style={{ color: '#343409' }}>Password</label>
                        <input type="password" autoComplete="current-password" className="text-input inputAdj" onChange={(e) => this.props.handleTextInput(e, 'user_password')} />
                    </div>
                </form>
                <div className="yellowBtn roundedYellow" onClick={() => this.props.login({ user_email: this.props.state.user_email, user_password: this.props.state.user_password })}>Login</div>
                    <p style={{ color: '#343409' }}>Not Registered?</p>
                <div className="yellowBtn roundedYellow" onClick={() => this.props.changeIndex(1)}>Register</div>
            </div>
        )
    }
}

export default Login;