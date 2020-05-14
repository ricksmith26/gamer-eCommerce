import React, { Component } from 'react';

import '../../../shared/shared.css';
import '../Login.css';

class PopUp extends Component {
    state = {
        Firstname: '',
        Lastname: '',
        Email: '',
        PhoneNumber: '',
        Address1: '',
        Address2: '',
        Address3: '',
        PostCode: '',

    }

    render() {
        return (
            <div onClick={this.handleClick}>
                <div className={!this.props.open ? 'hidden' : 'blackBackground'}></div>
                <div className={!this.props.open ? 'loginBox' : 'loginBox loginOpen'}>
                    <div className="loginContainer">
                        <h2>Register</h2>
                        <div className="details1">
                            <div className="inputContainer">
                                <label htmlFor="Firstname">Firstname</label>
                                <input className="text-input inputAdj" type="text" onChange={(e) => this.handleTextInput(e, 'Firstname')}/>
                            </div>
                            <div className="inputContainer">
                                <label htmlFor="Lastname">Lastname</label>
                                <input className="text-input inputAdj" type="text" onChange={(e) => this.handleTextInput(e, 'Lastname')}/>
                            </div>
                            <div className="inputContainer">
                                <label htmlFor="Lastname">Email</label>
                                <input className="text-input inputAdj" type="text" onChange={(e) => this.handleTextInput(e, 'Email')}/>
                            </div>
                            <div className="inputContainer">
                                <label htmlFor="Lastname">Phone Number</label>
                                <input className="text-input inputAdj" type="text" onChange={(e) => this.handleTextInput(e, 'PhoneNumber')}/>
                            </div>
                        </div>
                        <div className="inputContainer">
                            <label htmlFor="Lastname">Address Line 1</label>
                            <input className="text-input inputAdj" type="text" onChange={(e) => this.handleTextInput(e, 'Address1')}/>
                        </div>
                        <div className="inputContainer">
                            <label htmlFor="Lastname">Address Line 2</label>
                            <input className="text-input inputAdj" type="text" onChange={(e) => this.handleTextInput(e, 'Address2')}/>
                        </div>
                        <div className="inputContainer">
                            <label htmlFor="Lastname">Address Line 3</label>
                            <input className="text-input inputAdj" type="text" onChange={(e) => this.handleTextInput(e, 'Address3')}/>
                        </div>
                        <div className="inputContainer">
                            <label htmlFor="Lastname">Postcode</label>
                            <input className="text-input inputAdj" type="text" onChange={(e) => this.handleTextInput(e, 'PostCode')}/>
                        </div>
                        <div className="btnCon">
                            <button className="yellowBtn">Submit</button>
                            <button className="redBtn" onClick={() => this.props.handleClose()}>Cancel</button>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
    handleClick(e) {
        e.stopPropagation();
    }

    handleTextInput(e, input) {
        this.setState({[input]: e.target.value}, () => console.log(this.state))
    }
}

export default PopUp;