import React, { Component } from 'react';
import './AdvertSlider.css';
import { advertData } from '../../shared/advertData'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

class AdvertSlider extends Component {

    state = {
        currentIndex: 0
    }

    componentDidMount() {
        
        setInterval(()=> {
            console.log(this.state.currentIndex, advertData.length - 1)
            if (this.state.currentIndex === advertData.length - 1){
                this.setState({currentIndex: 0})
            } else { this.setState({currentIndex: this.state.currentIndex + 1 })}
        }, 5000)

    }


    render() {
        return (
            <div class="advertSliderContainer">
            <div class='advertBorder'></div>
  
                {advertData.map((data, i) => {
                    return  <img
                            alt={i}
                            className={i === this.state.currentIndex ? 'img-slideIn' : 'img-slideOut'}
                            src={advertData[i].image}
                            />
                })}
         
                </div>
        )
    }
}
export default AdvertSlider;