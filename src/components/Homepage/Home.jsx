import React, { Component } from 'react';
import AdvertSlider from '../AdvertSlider/AdvertSlider';
import SaleItems from '../SaleItems/SaleItems';
import * as productApi from '../../routes/productRoutes';
import './Home.css';
import '../../shared/shared.css';

class Home extends Component {
    _isMounted = true;

    state = {
        saleGames: [],
        saleHardware: []
    }

    componentDidMount() {
        this._isMounted = true;
       
            Promise.all([
                productApi.getSaleItems(),
                productApi.getSaleHardware()
            ]).then(([saleGames, saleHardware]) => {
                if (this._isMounted) {
                this.setState({saleGames, saleHardware})
                }
            })
    }

    componentWillUnmount() {
        this._isMounted = false;
      }
     

    render() {

        return (
            <div className="homeScroll">

                <div className="homeContainer">

                        <div className="picks">

                            <AdvertSlider screenWidth={this.props.screenWidth}></AdvertSlider>

                            <div className="topGamePick">

                                {this.state.saleGames.length ? <SaleItems
                                                                    title="Top Games"
                                                                    screenWidth={this.props.screenWidth}
                                                                    products={this.state.saleGames}
                                                                    ></SaleItems> : null}

                            </div>

                            <div className="topGamePick">

                                {this.state.saleHardware.length ? <SaleItems
                                                                    title="Top Hardware"
                                                                    screenWidth={this.props.screenWidth}
                                                                    products={this.state.saleHardware}></SaleItems> : null}

                            </div>
                        </div>
                </div>
            </div>
        )
    }
}

export default Home;