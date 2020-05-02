import React, { Component, useEffect } from 'react';
import { games } from '../../shared/game-data';
import '../../shared/shared.css';
import './DisplayGrid.css';
import xbox from '../../shared/gameImages/xbox.png';
import playStation from '../../shared/gameImages/playstation.jpeg';
import ps4case from '../../shared/gameImages/PS4Doom.webp';
import xboxcase from '../../shared/gameImages/doomxbox.webp';
import * as gameApi from '../../routes/gamesRoutes';
import { useHistory, browserHistory } from 'react-router-dom'

class DisplayGrid extends Component {

    state = {
        collection: [],
        term: ''
    }

    async componentDidMount() {
        console.log(this.props.location, this.props.match.params)
        // if (this.props.match.params.console) {
        //     this.setState({collection: games[this.props.match.params.console]})
        // }
        this.getGames()
    }

    async componentDidUpdate(prevProps) {
        console.log('>>>>>>>>>>>>>>>>>>>>UPDATING<<<<<<<<<<<<<<<<<')
        if (this.props.location.pathname !== prevProps.location.pathname) {
            this.getGames();

        }
    }

    async componentWillUnmount() {
        this.getGames()
    }


    render() {

        return (
            <div>
                <h3>{}</h3>
                <div className="gridContainer">
                    {this.state.collection && this.state.collection.length > 0 && this.state.collection.map((item, i) => {
                        return (
                            <div class="productBox">
                                <img className="gameImage" src={JSON.parse(item.product_images)[0]} />
                                <div className="title darkText">{item.product_name}</div>
                                <img className="brandIcon iconPosition" src={this.handleIconSelection()} />
                                <div className="greyLine linePosition"></div>
                                <div className="priceBanner lightText">£{item.product_price}</div>
                                <div class="mask mask-1"></div>
                                <div class="mask mask-2"></div>
                                <div class="content2">
                                <h4 className="lightText popUpTitle">{item.product_name}</h4>
                                </div>
                                <div class="content">
                                    <p className="lightText description">{item.product_description}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
    handleIconSelection() {
        if (this.props.match.params.subcategory.includes('PS4Games')) {
            return playStation;
        }
        if (this.props.match.params.console.includes('XboxOneGames')) {
            return xbox;
        }
    }

    async getGamesByTerm() {
        try {
            const term = Number(this.props.match.params.term.split('+')[1]);
            this.setState({ term });
            const collection = await gameApi.getGamesByTerm(term);
            this.setState({ collection });

        }

        catch {
            this.setState({collection: []})
        }
    }
    async getGamesBySubcategory() {
        try {
            const subcategory = Number(this.props.match.params.subcategory.split('+')[1]);
            this.setState({ subcategory });
            const collection = await gameApi.getGamesBySubcategory(subcategory);
            this.setState({ collection });

        }

        catch {
            this.setState({collection: []})
        }
    }

    async getGames() {
        if (this.props.match.params.subcategory.split('+')[1]) {
            return this.getGamesBySubcategory();
        }
        if (this.props.match.params.term.split('+')[1]) {
            return this.getGamesByTerm();
        }
    }
}

export default DisplayGrid;