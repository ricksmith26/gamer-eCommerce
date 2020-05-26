import React from 'react';
import AdvertSlider from '../AdvertSlider/AdvertSlider';
import SaleItems from '../SaleItems/SaleItems';
import './Home.css';
import '../../shared/shared.css';

function Home(props) {
    return (
        <div className={props.screenWidth > 750 ? "homeScroll" : "mobHomeScroll"}>
            <div className="homeContainer" style={{marginTop: props.screenWidth < 750 ? '50px' : '0px'}}>
                    <div className={props.screenWidth > 750 ? "picks" : "mobilePicks"}>
                        <AdvertSlider screenWidth={props.screenWidth}></AdvertSlider>
                        <div className={props.screenWidth > 750 ? "topGamePick" :'mobileGamePick'}>
                            <SaleItems title="Top Games" screenWidth={props.screenWidth}></SaleItems>
                        </div>
                        <div className={props.screenWidth > 750 ? "topGamePick" :'mobileGamePick'}>
                            <SaleItems title="Top Hardware" screenWidth={props.screenWidth}></SaleItems>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default Home;