import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './AdvertSlider.css';
import { advertData } from '../../shared/advertData'

class AdvertSlider extends Component {
    recurring = false;

    state = {
        currentIndex: 0
    }

    componentDidMount() {
        this.recurring = true;
            this.interval = setInterval(()=> {
                if (this.recurring) {
                    if (this.state.currentIndex === advertData.length - 1){
                        this.setState({currentIndex: 0})
                    } else { this.setState({currentIndex: this.state.currentIndex + 1 })}

                }
    
            }, 5000)
    }

    componentWillUnmount() {
        this.recurring = false;
        clearInterval(this.interval);
    }

        ///TODO*** add advertData with links to BE &create endpoint
    render() {
        return (
            <div className="advertDiv">
                {advertData.map((data, i) => {
                    return  <Link to={data.link}>
                                <img
                                alt={i}
                                key={i}
                                className={i === this.state.currentIndex ? 'img-slideIn' : 'img-slideOut'}
                                src={advertData[i].image}
                                ></img>
                            </Link>
                })}
                </div>
        )
    }

}
export default AdvertSlider;