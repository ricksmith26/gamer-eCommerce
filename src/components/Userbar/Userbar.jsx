import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Userbar.css';
import logo2 from '../../shared/deskIcon.png';
import Login from '../User/User';
import SearchBar from './Components/SearchBar';



// const handler = useCallback(debounce(someFunction, 2000), []);

class Userbar extends Component {


    render() {
        return (
            <div className="userbarContainer">
                <div className="userBarItem"></div>
                <div className="logoBarItem">
                    <Link to='/'>
                        <img className="logo" src={logo2} alt="logo"/>
                    </Link>
                    <SearchBar></SearchBar>
                </div>
               <Login setUserInfo={this.props.setUserInfo.bind(this)} userProfile={this.props.userProfile} screenWidth={this.props.screenWidth}/>
            </div>
        )
    }

   
}
export default Userbar;