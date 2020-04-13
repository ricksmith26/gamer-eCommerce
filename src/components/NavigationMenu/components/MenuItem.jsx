import React, { Component } from 'react';
import PopUpItems from './PopUpItems';
import './MenuItem.css';

class MenuItem extends Component {
    state = {
        open: false,
    }

    render(){
        return (
            <div onMouseEnter={() => this.setState({open: true})} onMouseLeave={() => this.setState({open: false})} className='menuItem'>
               {this.props.navMenuItem.category}
               { this.state.open && this.props.navMenuItem.subcategories && <PopUpItems index={this.props.index} subcategory={this.props.navMenuItem.subcategories}></PopUpItems> }
            </div>
        )
    }

}

export default MenuItem;