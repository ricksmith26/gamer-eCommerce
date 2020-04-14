import React, { Component } from 'react';
import './AdvertSlider.css';
import { advertData } from '../../shared/advertData'

class AdvertSlider extends Component {

    state = {
        currentIndex: 0
    }

    componentDidMount() {
        
        setInterval(()=> {
            if (this.state.currentIndex === advertData.length - 1){
                this.setState({currentIndex: 0})
            } else { this.setState({currentIndex: this.state.currentIndex + 1 })}
        }, 5000)

    }

    componentWillUnmount() {
        
    }


    render() {
        return (
            <div className="advertSliderContainer">
            <div className='advertBorder'></div>
  
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
}
export default AdvertSlider;