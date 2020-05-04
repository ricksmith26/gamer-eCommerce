import React, { Component } from 'react';
import PopUpItems from './PopUpItems';
import './MenuItem.css';

class MenuItem extends Component {
    state = {
        open: false,
    }

    render() {
        return (
            <div onMouseEnter={() => this.setState({ open: true })} onMouseLeave={() => this.setState({ open: false })} className='menuItem'>
                {this.props.navMenuItem.category_name}
                {this.state.open
                    && this.props.navMenuItem.subcategories
                    && this.props.navMenuItem.subcategories.length > 0
                    && <PopUpItems index={this.props.index} subcategory={this.props.navMenuItem.subcategories} handleClose={this.handleClose.bind(this)}></PopUpItems>}
            </div>
        )
    }
    handleClose() {
        this.setState({open: false})
    }

}

export default MenuItem;