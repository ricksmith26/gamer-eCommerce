import React, { Component } from 'react';
import { games } from '../../shared/game-data';
import '../../shared/shared.css';
import './DisplayGrid.css';
import xbox from '../../shared/gameImages/xbox.png';
import playStation from '../../shared/gameImages/playstation.jpeg';
import ps4case from '../../shared/gameImages/PS4Doom.webp';
import xboxcase from '../../shared/gameImages/doomxbox.webp';

class DisplayGrid extends Component {

    state = {
        collection: []
    }

    async componentDidMount() {
        console.log(this.props)
        let search = [];
        if (this.props.match.params.console) {
            this.setState({collection: games[this.props.match.params.console]})
           
        }
        // if (this.props.match.params.genre) {
        //     this.setState({genreSearchTerms: this.props.match.params.genre})
        //     this.collection.filter(())
        // }
      }

      componentWillUnmount() {
        
    }

    render() {

        return (
            <div className="gridContainer">
                {this.state.collection.map((item) => {
                    return (
                            <div class="productBox">
                            <img className="gameImage" src={this.handleGameImageSelection()}/>
                            <div className="title darkText">{item.name}</div>
                            <img className="brandIcon" src={this.handleIconSelection()}/>
                            <div className="greyLine"></div>
                            <div className="priceBanner lightText">{item.price}</div>
                            </div>
                    )
                })}
            </div>
        )
    }
    handleIconSelection() {
        console.log('firing')
        if (this.props.match.params.console === 'PS4Games'){
            return playStation;
        }
        if (this.props.match.params.console === 'XboxOne'){
            return xbox;
        }
    }
    handleGameImageSelection() {
        console.log('firing')
        if (this.props.match.params.console === 'PS4Games'){
            return ps4case;
        }
        if (this.props.match.params.console === 'XboxOne'){
            return xboxcase;
        }
    }
}

export default DisplayGrid;