import React, { Component } from 'react';
import './AdvertSlider.css';
import { advertData } from '../../shared/advertData'

class AdvertSlider extends Component {
    recurring = false;

    state = {
        currentIndex: 0
    }

    componentDidMount() {
        this.recurring = true;
            setInterval(()=> {
                if (this.recurring) {
                    if (this.state.currentIndex === advertData.length - 1){
                        this.setState({currentIndex: 0})
                    } else { this.setState({currentIndex: this.state.currentIndex + 1 })}

                }
    
            }, 5000)
    }

    componentWillUnmount() {
        this.recurring = false;
    }


    render() {
        return (
            <div className={this.getClassName()}>
                {advertData.map((data, i) => {
                    return  <img
                            alt={i}
                            key={i}
                            className={i === this.state.currentIndex ? 'img-slideIn' : 'img-slideOut'}
                            src={advertData[i].image}
                            />
                })}
                </div>
        )
    }

    getClassName() {
        if (this.props.screenWidth <= 750) {
            return 'mobile';
        } else { return 'desktop'}
    }
}
export default AdvertSlider;