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
        console.log(this.props.location, this.props.match.params.console.includes('PS4Games'))
        // if (this.props.match.params.console) {
        //     this.setState({collection: games[this.props.match.params.console]})
        // }
        if (this.props.match.params.term) {
            return this.getGamesByTerm();
        }
        if (this.props.match.params.console) {
            //// CHANGE TO GET GAMES BY CONSOLE
            return this.getGamesByTerm();
        }
    }

    async componentDidUpdate(prevProps) {
        if (this.props.location.pathname !== prevProps.location.pathname) {
            if (this.props.location.pathname.split('/')[1] === 'games') {
                this.getGamesByTerm();
            }

        }
    }


    render() {

        return (
            <div>
                <h3>{}</h3>
                <div className="gridContainer">
                    {this.state.collection && this.state.collection.map((item, i) => {
                        return (
                            <div class="productBox">
                                <img className="gameImage" src={item.game_image} />
                                <div className="title darkText">{item.game_name}</div>
                                <img className="brandIcon iconPosition" src={this.handleIconSelection()} />
                                <div className="greyLine linePosition"></div>
                                <div className="priceBanner lightText">£{item.game_price}</div>
                                <div class="mask mask-1"></div>
                                <div class="mask mask-2"></div>
                                <img/>
                                <div class="content2">
                                <h4 className="lightText popUpTitle">{item.game_name}</h4>
                                </div>
                                <div class="content">
                                    <p className="lightText description">{item.game_description}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
    handleIconSelection() {
        if (this.props.match.params.console.includes('PS4Games')) {
            return playStation;
        }
        if (this.props.match.params.console.includes('XboxOneGames')) {
            return xbox;
        }
    }

    async getGamesByTerm() {
        const term = Number(this.props.match.params.term.split('+')[1]);
        this.setState({ term });
        const products = await gameApi.getGamesByTerm(term);
        this.setState({ collection: products });
    }
}

export default DisplayGrid;